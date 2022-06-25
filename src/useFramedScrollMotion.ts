import { useRefViewportScroll } from './useRefViewportScroll';
import { useViewportScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

export function useFramedScrollMotion(
  keyframes: number[],
  outputRange: unknown[]
): [ref: RefObject<HTMLDivElement>, outputRange: MotionValue<unknown>] {
  const { scrollYProgress } = useViewportScroll();
  const [ref, inputRange] = useRefViewportScroll(keyframes);

  const value = useTransform(scrollYProgress, inputRange, outputRange);

  return [ref, value];
}
