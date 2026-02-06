export interface PageVisit {
  url: string;
  time_spent_seconds: number;
  scroll_depth_percent: number;
  timestamp: string;
}

export interface ClickEvent {
  element: string;
  element_type: 'cta' | 'faq' | 'testimonial' | 'link' | 'other';
  timestamp: string;
}

export interface MouseMovement {
  hesitation_count: number;
  speed_average: number;
}

export interface DeviceInfo {
  type: 'mobile' | 'desktop' | 'tablet';
  browser: string;
  location: string;
}

export interface TrackingData {
  visitor_id: string;
  session_id: string;
  timestamp: string;
  pages_visited: PageVisit[];
  clicks: ClickEvent[];
  mouse_movements: MouseMovement;
  device_info: DeviceInfo;
  return_visitor: boolean;
  previous_visits_count: number;
  referrer: string;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  sender: 'visitor' | 'agent';
  message: string;
  timestamp: string;
  message_type?: 'text' | 'product_card' | 'first_message';
}

export interface LindyFirstMessage {
  visitor_id: string;
  session_id: string;
  message: string;
  psychological_profile?: {
    risk_tolerance: 'low' | 'medium' | 'high';
    decision_style: 'analytical' | 'emotional' | 'mixed';
    trust_level_required: 'low' | 'medium' | 'high';
    urgency: 'low' | 'medium' | 'high';
  };
  behavioral_insights?: {
    primary_interest: string;
    main_concern: string;
    engagement_level: 'low' | 'medium' | 'high';
  };
  timestamp: string;
}

export interface LindyAgentResponse {
  visitor_id: string;
  session_id: string;
  message_type: 'agent_response';
  message: string;
  conversation_stage: 'opening' | 'exploration' | 'objection_handling' | 'closing';
  timestamp: string;
}

export interface LindyPaymentSignal {
  action: 'SHOW_PAYMENT_LINK';
  visitor_ready: boolean;
  visitor_id: string;
  session_id: string;
  timestamp: string;
}
