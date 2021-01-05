import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import usePageAttributes from 'hooks/usePageAttributes';

const Greetings = () => {
  const { t } = useTranslation('common');
  const { pageName } = usePageAttributes();

  return <h1 className="title">{t('greetings', { pageName })}</h1>;
};

export default Greetings;
