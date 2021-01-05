import React, { Fragment } from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';
import MainLayout from 'components/MainLayout';
import { DefaultSeo } from 'next-seo';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import useSeoConfig from 'seo.config';
import 'styles/main.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

const updateVirtualHeight = () => {
  const vh = window.innerHeight * 0.01;
  [
    ['vh', vh],
    ['actual-vh', Math.max(5.5, vh)],
  ].forEach(([name, value]) => {
    document.documentElement.style.setProperty(`--${name}`, `${value}px`);
  });
};

class CustomApp extends App {
  componentDidMount() {
    updateVirtualHeight();
    window.addEventListener('resize', updateVirtualHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateVirtualHeight);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const seoConfig = useSeoConfig();

    return (
      <AnimatePresence exitBeforeEnter>
        <Fragment key={router.route}>
          <DefaultSeo {...seoConfig} />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </Fragment>
      </AnimatePresence>
    );
  }
}

export default CustomApp;
