import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory message store (in production, use Redis or database)
// Note: This is shared across requests in the same serverless instance
const messageStore: Map<string, any[]> = new Map();

// Cleanup old sessions (older than 1 hour)
const cleanupOldSessions = () => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  messageStore.forEach((messages, sessionId) => {
    const recentMessages = messages.filter(m => new Date(m.timestamp).getTime() > oneHourAgo);
    if (recentMessages.length === 0) {
      messageStore.delete(sessionId);
    } else {
      messageStore.set(sessionId, recentMessages);
    }
  });
};

// Add message to store (called from webhook)
export const addMessage = (sessionId: string, message: any) => {
  const messages = messageStore.get(sessionId) || [];
  messages.push({
    ...message,
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
  });
  messageStore.set(sessionId, messages);
};

// Get messages for polling
export const getMessages = (sessionId: string, afterId?: string): any[] => {
  const messages = messageStore.get(sessionId) || [];
  
  if (afterId) {
    const afterIndex = messages.findIndex(m => m.id === afterId);
    if (afterIndex !== -1) {
      return messages.slice(afterIndex + 1);
    }
  }
  
  return messages;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sessionId, afterId } = req.query;

    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Missing sessionId' });
    }

    // Cleanup old sessions periodically
    cleanupOldSessions();

    const messages = getMessages(sessionId, afterId as string | undefined);

    return res.status(200).json({ messages });
  } catch (error) {
    console.error('Get messages error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
