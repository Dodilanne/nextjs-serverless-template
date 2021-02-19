import React, { ReactNode, createContext, useState, useEffect, useCallback } from 'react';
import useEventListener from 'hooks/useEventListener';

export interface DeviceContextState {
  isMobile: boolean;
  isDesktop: boolean;
}

const defaultState: DeviceContextState = { isMobile: false, isDesktop: true };

const DeviceContext = createContext<DeviceContextState>(defaultState);

interface DeviceContextProviderProps {
  mobileThreshold?: number; // in pixels
  children: ReactNode;
}

export const DeviceContextProvider = ({
  mobileThreshold = 1024,
  children,
}: DeviceContextProviderProps) => {
  const [state, setState] = useState(defaultState);

  const onResizeEvent = useCallback(() => {
    const isMobile = window.innerWidth < mobileThreshold;
    setState({ isMobile, isDesktop: !isMobile });
  }, []);

  useEventListener('resize', onResizeEvent);

  useEffect(() => {
    onResizeEvent();
  }, []);

  return <DeviceContext.Provider value={state}>{children}</DeviceContext.Provider>;
};

export default DeviceContext;
