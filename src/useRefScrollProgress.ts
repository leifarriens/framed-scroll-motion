import { useState, useRef, useLayoutEffect } from 'react';

export function useRefScrollProgress(watch?: unknown) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop - window.innerHeight;

    const documentHeightOffset =
      document.body.clientHeight - window.innerHeight;

    setStart(offsetTop / documentHeightOffset);
    setEnd(
      (offsetTop + window.innerHeight + rect.height) / documentHeightOffset
    );
  }, [watch]);

  return { ref, start, end };
}
