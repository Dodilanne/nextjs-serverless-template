import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { DeviceContextProvider } from 'contexts/DeviceContext';
import { getPageSlug } from 'utils/helper-functions';
import { PageNames } from 'utils/constants';
import pageAnimation from 'utils/page-animation';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const router = useRouter();
  const pageSlug = getPageSlug(router.pathname);
  const pageName = PageNames[pageSlug];
  const seoProps = { title: pageName };

  return (
    <DeviceContextProvider>
      <NextSeo {...seoProps} />
      <motion.div style={{ height: '100%' }} {...pageAnimation}>
        <div className="main-content">
          <div className="content-container">{children}</div>
        </div>
      </motion.div>
    </DeviceContextProvider>
  );
};

export default MainLayout;
