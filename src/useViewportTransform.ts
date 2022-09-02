import { useViewportScroll, useTransform } from 'framer-motion';

export function useViewportTransform(
  inputRange: number[],
  outputRange: unknown[]
) {
  const { scrollYProgress } = useViewportScroll();

  return useTransform(scrollYProgress, inputRange, outputRange);
}
