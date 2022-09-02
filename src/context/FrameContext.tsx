import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ContextProps = {
  width: number | null;
  height: number | null;
};

const initialState: ContextProps = {
  width: null,
  height: null,
};

const FrameContext = createContext<ContextProps>(initialState);

export const FrameProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [size, setSize] = useState(initialState);

  useEffect(() => {
    function handleRezise() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleRezise);

    return () => {
      window.removeEventListener('resize', handleRezise);
    };
  }, []);

  return <FrameContext.Provider value={size}>{children}</FrameContext.Provider>;
};

export function useWindowSize() {
  return useContext(FrameContext);
}
