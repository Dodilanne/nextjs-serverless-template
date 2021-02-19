import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { DeviceContextProvider } from 'contexts/DeviceContext';
import usePageAttributes from 'hooks/usePageAttributes';
import pageAnimation from 'utils/page-animation';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { pageName } = usePageAttributes();
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
