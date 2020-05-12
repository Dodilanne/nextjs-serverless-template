import { memo } from 'react';
import { isMatch } from 'lodash';

export const memoize = (component, props) =>
  memo(component, (prev, next) => {
    const comparedObject = {};
    props.forEach(prop => {
      comparedObject[prop] = next[prop];
    });

    return isMatch(prev, comparedObject);
  });

export const getPageSlug = pathname =>
  pathname.length < 2 ? 'home' : pathname.replace('/', '');

export default { memoize, getPageSlug };
