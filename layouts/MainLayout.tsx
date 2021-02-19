import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { getPageSlug } from 'utils/helper-functions';
import { PageNames } from 'utils/constants';
import { DeviceContextProvider } from 'contexts/DeviceContext';

const fadeAnimation: HTMLMotionProps<'div'> = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.4,
    ease: 'easeInOut',
  },
};

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
      <motion.div {...fadeAnimation}>
        <div className="main-content">
          <div className="content-container">{children}</div>
        </div>
      </motion.div>
    </DeviceContextProvider>
  );
};

export default MainLayout;
