import React, { Fragment } from 'react';
import App from 'next/app';
import { withRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { PageTransition } from 'next-page-transitions';
import whyDidYouRender from '@welldone-software/why-did-you-render';
import useSeoConfig from '../seo.config';
import '../scss/main.scss';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  whyDidYouRender(React);
}

class CustomApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    const seoConfig = useSeoConfig(this.props);
    return (
      <PageTransition timeout={300} classNames="page-transition">
        <Fragment key={`component-${router.pathname}`}>
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
        </Fragment>
      </PageTransition>
    );
  }
}

export default withRouter(CustomApp);
