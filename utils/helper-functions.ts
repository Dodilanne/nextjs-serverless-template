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

export const getPageSlug = (pathname: any): keyof typeof PageNames =>
  pathname.length < 2 ? 'home' : pathname.replace('/', '');

export default { memoize, getPageSlug };
