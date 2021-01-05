import { useCallback } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const usePageAttributes = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('common');

  const pageName = useCallback(() => {
    let slug = pathname.replace('/', '');
    if (!slug.length) slug = 'home';
    return t(`page-names.${slug}`);
  }, [pathname, t])();

  return { pageName };
};

export default usePageAttributes;
