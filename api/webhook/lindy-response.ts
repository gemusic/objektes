import type { VercelRequest, VercelResponse } from '@vercel/node';

// Import message store helper
// Note: In serverless, we need a shared storage solution
// For now, we'll use a simple approach that works for demo

// In-memory store (shared within instance)
const messageStore: Map<string, any[]> = new Map();

const addMessage = (sessionId: string, message: any) => {
  const messages = messageStore.get(sessionId) || [];
  messages.push({
    ...message,
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
  });
  messageStore.set(sessionId, messages);
  console.log(`Added message to session ${sessionId}:`, message);
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    const { session_id, visitor_id, message, message_type, action, psychological_profile, behavioral_insights } = data;

    console.log('Received Lindy webhook:', JSON.stringify(data, null, 2));

    // Validate session
    if (!session_id) {
      return res.status(400).json({ error: 'Missing session_id' });
    }

    // Handle different message types
    if (action === 'SHOW_PAYMENT_LINK') {
      // Payment signal
      addMessage(session_id, {
        action: 'SHOW_PAYMENT_LINK',
        visitor_ready: true,
        sender: 'system',
        timestamp: new Date().toISOString(),
      });
    } else if (message_type === 'first_message' || psychological_profile) {
      // First personalized message from Lindy
      addMessage(session_id, {
        sender: 'agent',
        message,
        message_type: 'first_message',
        psychological_profile,
        behavioral_insights,
        timestamp: new Date().toISOString(),
      });
    } else if (message) {
      // Regular agent response
      addMessage(session_id, {
        sender: 'agent',
        message,
        message_type: message_type || 'agent_response',
        timestamp: new Date().toISOString(),
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Lindy webhook error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Export for use in messages.ts
export { messageStore, addMessage };
