import React, { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
import { motion, HTMLMotionProps } from 'framer-motion';
import { DeviceContextProvider } from 'contexts/DeviceContext';
import usePageAttributes from 'hooks/usePageAttributes';

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
  const { pageName } = usePageAttributes();
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
