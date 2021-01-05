import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const LocaleTester = () => {
  const { t, lang } = useTranslation('common');

  return (
    <div className="device-monitor-container" style={{ margin: '40px 0', fontWeight: 'bold' }}>
      <div className="content-wrapper">
        <h1>{`${t('current-locale')}: ${lang}`}</h1>
      </div>
    </div>
  );
};

export default LocaleTester;
