import { useEffect, useRef } from 'react';

const useEventListener = <K extends keyof WindowEventMap>(
  eventType: K,
  handler: (ev: WindowEventMap[K]) => any
) => {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const onEvent = (event: WindowEventMap[K]) => savedHandler.current(event);
    window.addEventListener(eventType, onEvent);
    return () => window.removeEventListener(eventType, onEvent);
  }, []);
};

export default useEventListener;
