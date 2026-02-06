import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import type { TrackingData, PageVisit, ClickEvent } from '@/types/tracking';
import {
  generateVisitorId,
  generateSessionId,
  getDeviceType,
  getBrowser,
  getLocation,
  isReturnVisitor,
  getVisitCount,
  incrementVisitCount,
  sendTrackingData,
} from '@/lib/trackingService';

const TRACKING_DURATION_MS = 15000; // 15 seconds as per plan

export const useVisitorTracking = () => {
  const location = useLocation();
  const visitorIdRef = useRef<string>('');
  const sessionIdRef = useRef<string>('');
  const startTimeRef = useRef<number>(Date.now());
  const pageStartTimeRef = useRef<number>(Date.now());
  const maxScrollRef = useRef<number>(0);
  const clicksRef = useRef<ClickEvent[]>([]);
  const pagesVisitedRef = useRef<PageVisit[]>([]);
  const hesitationCountRef = useRef<number>(0);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const trackingSentRef = useRef<boolean>(false);

  // Initialize visitor and session IDs
  useEffect(() => {
    visitorIdRef.current = generateVisitorId();
    sessionIdRef.current = generateSessionId();
    incrementVisitCount();
    
    // Store session ID for chat
    sessionStorage.setItem('objekté_session_id', sessionIdRef.current);
  }, []);

  // Track scroll depth
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
    maxScrollRef.current = Math.max(maxScrollRef.current, scrollPercent);
  }, []);

  // Track clicks on CTAs and important elements
  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const closestLink = target.closest('a');
    const closestButton = target.closest('button');
    const element = closestLink || closestButton || target;
    
    let elementType: ClickEvent['element_type'] = 'other';
    let elementName = '';

    // Detect CTA buttons
    if (element.matches('a[href="/paiement"], button')) {
      const text = element.textContent?.toLowerCase() || '';
      if (text.includes('commander') || text.includes('protéger') || text.includes('payer')) {
        elementType = 'cta';
        elementName = 'CTA: ' + (element.textContent?.slice(0, 50) || 'Button');
      }
    }

    // Detect FAQ interactions
    if (target.closest('[data-faq]') || target.closest('.faq-section')) {
      elementType = 'faq';
      elementName = 'FAQ Section';
    }

    // Detect testimonial interactions
    if (target.closest('[data-testimonial]') || target.textContent?.includes('témoignage')) {
      elementType = 'testimonial';
      elementName = 'Testimonial';
    }

    // Detect links
    if (closestLink && elementType === 'other') {
      elementType = 'link';
      elementName = closestLink.href || 'Link';
    }

    if (elementType !== 'other' || closestButton || closestLink) {
      clicksRef.current.push({
        element: elementName || element.tagName,
        element_type: elementType,
        timestamp: new Date().toISOString(),
      });
    }
  }, []);

  // Detect hesitation (hover without click for 1.5s)
  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = target.matches('a, button, [role="button"]') || target.closest('a, button');
    
    if (isInteractive) {
      hoverTimerRef.current = setTimeout(() => {
        hesitationCountRef.current++;
      }, 1500);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  // Save current page visit data
  const savePageVisit = useCallback(() => {
    const timeSpent = (Date.now() - pageStartTimeRef.current) / 1000;
    pagesVisitedRef.current.push({
      url: location.pathname,
      time_spent_seconds: Math.round(timeSpent),
      scroll_depth_percent: maxScrollRef.current,
      timestamp: new Date().toISOString(),
    });
  }, [location.pathname]);

  // Send tracking data after 15 seconds
  const sendTracking = useCallback(async () => {
    if (trackingSentRef.current) return;
    trackingSentRef.current = true;

    // Save current page before sending
    savePageVisit();

    const trackingData: TrackingData = {
      visitor_id: visitorIdRef.current,
      session_id: sessionIdRef.current,
      timestamp: new Date().toISOString(),
      pages_visited: pagesVisitedRef.current,
      clicks: clicksRef.current,
      mouse_movements: {
        hesitation_count: hesitationCountRef.current,
        speed_average: 0, // Not tracking detailed mouse movements
      },
      device_info: {
        type: getDeviceType(),
        browser: getBrowser(),
        location: getLocation(),
      },
      return_visitor: isReturnVisitor(),
      previous_visits_count: getVisitCount() - 1,
      referrer: document.referrer || 'direct',
    };

    console.log('Sending tracking data after 15s:', trackingData);
    await sendTrackingData(trackingData);
  }, [savePageVisit]);

  // Track page changes
  useEffect(() => {
    // Save previous page data if exists
    if (pagesVisitedRef.current.length > 0) {
      savePageVisit();
    }
    
    // Reset for new page
    pageStartTimeRef.current = Date.now();
    maxScrollRef.current = 0;
  }, [location.pathname, savePageVisit]);

  // Setup event listeners and 15s timer
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    // Send tracking after 15 seconds
    const timer = setTimeout(() => {
      sendTracking();
    }, TRACKING_DURATION_MS);

    // Also send on page unload if not already sent
    const handleBeforeUnload = () => {
      if (!trackingSentRef.current) {
        sendTracking();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearTimeout(timer);
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, [handleScroll, handleClick, handleMouseEnter, handleMouseLeave, sendTracking]);

  return {
    visitorId: visitorIdRef.current,
    sessionId: sessionIdRef.current,
  };
};

export default useVisitorTracking;
