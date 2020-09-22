import { memo, FunctionComponent } from 'react';
import _ from 'lodash';
import { PageNames } from './constants';

export const memoize = <Props>(component: FunctionComponent<Props>, props: (keyof Props)[]) =>
  memo(component, (prev, next) => {
    const comparedObject = {} as any;
    props.forEach(prop => {
      comparedObject[prop] = next[prop];
    });

    return _.isMatch(prev, comparedObject);
  });

export const getPageSlug = (pathname: string): keyof typeof PageNames => {
  const isHome = pathname.length < 2;
  const pageSlug = (isHome ? 'home' : pathname.replace('/', '')) as keyof typeof PageNames;

  return PageNames[pageSlug] ? pageSlug : 'home';
};

export default { memoize, getPageSlug };
