import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { withRouter } from 'next/router';
import { PageNames } from '../../utils/constants';
import { getPageSlug } from '../../utils/helper-functions';

const MainContent = ({ children, router, className }) => {
  const pageSlug = getPageSlug(router.pathname);
  const pageName = PageNames[pageSlug];
  const seoProps = { title: pageName };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // A isMobile prop will be passed down to all of MainContent's children
  // This can be useful to dynamically render device specific content
  const childrenWithExtraProp = React.Children.map(children, child =>
    React.cloneElement(child, { isMobile })
  );

  useEffect(() => document.body.classList.remove('no-scroll'), []);

  return (
    <>
      <NextSeo {...seoProps} />
      <div className={`main-content page-${pageSlug} ${className}`}>
        <div className="content-container">{childrenWithExtraProp}</div>
      </div>
    </>
  );
};

MainContent.defaultProps = {
  className: '',
};

export default withRouter(MainContent);
