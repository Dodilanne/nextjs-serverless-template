import DeviceContext from 'contexts/DeviceContext';
import React, { useContext } from 'react';

const DeviceMonitor = () => {
  const { isMobile } = useContext(DeviceContext);

  return (
    <div className="device-monitor-container" style={{ margin: '40px 0', fontWeight: 'bold' }}>
      <div className="content-wrapper">
        <h1>{`Device type: ${isMobile ? 'MOBILE' : 'DESKTOP'}`}</h1>
      </div>
    </div>
  );
};

export default DeviceMonitor;
