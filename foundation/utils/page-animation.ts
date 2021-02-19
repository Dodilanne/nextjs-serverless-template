import { HTMLMotionProps } from 'framer-motion';

const pageAnimation: HTMLMotionProps<'div'> = {
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
    duration: 0.8,
    ease: 'easeInOut',
  },
};

export default pageAnimation;
