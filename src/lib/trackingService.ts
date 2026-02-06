import type { TrackingData } from '@/types/tracking';

const API_BASE_URL = '/api';

export const generateVisitorId = (): string => {
  const stored = localStorage.getItem('objekté_visitor_id');
  if (stored) return stored;
  
  const newId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  localStorage.setItem('objekté_visitor_id', newId);
  return newId;
};

export const generateSessionId = (): string => {
  return `s_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};

export const getVisitCount = (): number => {
  const count = parseInt(localStorage.getItem('objekté_visit_count') || '0', 10);
  return count;
};

export const incrementVisitCount = (): number => {
  const count = getVisitCount() + 1;
  localStorage.setItem('objekté_visit_count', count.toString());
  return count;
};

export const isReturnVisitor = (): boolean => {
  return getVisitCount() > 0;
};

export const getDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

export const getBrowser = (): string => {
  const ua = navigator.userAgent;
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('Opera')) return 'Opera';
  return 'Unknown';
};

export const getLocation = (): string => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timezone || 'Unknown';
  } catch {
    return 'Unknown';
  }
};

export const sendTrackingData = async (data: TrackingData): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/tracking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending tracking data:', error);
    return false;
  }
};

export const sendChatMessage = async (
  sessionId: string,
  visitorId: string,
  message: string
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session_id: sessionId,
        visitor_id: visitorId,
        message,
        timestamp: new Date().toISOString(),
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error sending chat message:', error);
    return false;
  }
};

export const pollMessages = async (sessionId: string): Promise<any[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat/messages?sessionId=${sessionId}`);
    if (!response.ok) return [];
    
    const data = await response.json();
    return data.messages || [];
  } catch (error) {
    console.error('Error polling messages:', error);
    return [];
  }
};
