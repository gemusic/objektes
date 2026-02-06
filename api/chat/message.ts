import type { VercelRequest, VercelResponse } from '@vercel/node';

const LINDY_WEBHOOK_URL = process.env.LINDY_WEBHOOK_URL || 'https://public.lindy.ai/api/v1/webhooks/lindy/a2cb8077-4aa9-44f1-847e-35c1d919cfd8';
const LINDY_WEBHOOK_SECRET = process.env.LINDY_WEBHOOK_SECRET || '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { session_id, visitor_id, message, timestamp } = req.body;

    // Validate required fields
    if (!session_id || !visitor_id || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('Received chat message:', { session_id, visitor_id, message });

    // Forward to Lindy AI
    const lindyResponse = await fetch(LINDY_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINDY_WEBHOOK_SECRET}`,
      },
      body: JSON.stringify({
        visitor_id,
        session_id,
        message_type: 'visitor_response',
        message,
        timestamp: timestamp || new Date().toISOString(),
      }),
    });

    if (!lindyResponse.ok) {
      console.error('Lindy webhook error:', await lindyResponse.text());
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Chat message error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
