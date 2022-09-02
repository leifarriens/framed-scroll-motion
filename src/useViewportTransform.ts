import { useScroll, useTransform } from 'framer-motion';

export function useViewportTransform(
  inputRange: number[],
  outputRange: unknown[]
) {
  const { scrollYProgress } = useScroll();

  return useTransform(scrollYProgress, inputRange, outputRange);
}
