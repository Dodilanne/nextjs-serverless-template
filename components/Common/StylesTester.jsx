import React from 'react';
import { useRouter } from 'next/router';
import { getPageSlug } from '../../utils/helper-functions';
import { PageNames } from '../../utils/constants';

const DefinedFonts = ['h1', 'h2', 'h3', 'p'];
const ButtonClasses = ['', 'btn-outline'];

export default () => {
  const { pathname } = useRouter();
  const content = PageNames[getPageSlug(pathname)];
  const style = { marginTop: 10 };

  return (
    <div className="content-wrapper" style={{ paddingTop: 70 }}>
      {DefinedFonts.map(Font => (
        <Font key={`font-test-${Font}`} style={style}>
          {`${Font}: ${content}`}
        </Font>
      ))}
      {ButtonClasses.map(className => (
        <a
          key={`btn-test-${className}`}
          style={style}
          className={`btn ${className}`}
        >
          {content}
        </a>
      ))}
    </div>
  );
};
