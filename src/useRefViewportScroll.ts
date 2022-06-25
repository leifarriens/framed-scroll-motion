import { useState, useRef, RefObject } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export type InputRange = number[];

/**
 *
 * @param keyframes Viewport keyframes must be ascending decimal values representing the viewport scroll percentage
 * @param watch
 * @returns
 */
export function useRefViewportScroll(
  keyframes: number[] = [0, 1],
  watch?: unknown
): [ref: RefObject<HTMLDivElement>, inputRange: InputRange] {
  const ref = useRef<HTMLDivElement>(null);
  const [inputRange, setInputRange] = useState<InputRange>(keyframes);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop - window.innerHeight;

    const documentHeightOffset =
      document.body.clientHeight - window.innerHeight;

    const values = keyframes.map(
      (viewportPercentage) =>
        (offsetTop + (window.innerHeight + rect.height) * viewportPercentage) /
        documentHeightOffset
    );

    setInputRange(values);
  }, [watch]);

  return [ref, inputRange];
}
