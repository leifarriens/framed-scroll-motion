import { useState, useRef, RefObject } from 'react';
import { useWindowSize } from './context/FrameContext';
import { useIsomorphicLayoutEffect } from './utils/useIsomorphicLayoutEffect';

export type InputRange = number[];

/**
 *
 * @param keyframes Viewport keyframes must be ascending decimal values representing the refs viewport scroll percentage
 * @returns [ref, inputRange]
 */
export function useRefViewportScroll(
  keyframes: number[] = [0, 1]
): [ref: RefObject<HTMLDivElement>, inputRange: InputRange] {
  const size = useWindowSize();
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
  }, [size]);

  return [ref, inputRange];
}
