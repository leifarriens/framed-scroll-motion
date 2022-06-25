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

const ReziseContext = createContext<ContextProps>(initialState);

export const ReziseProvider = ({
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

  return (
    <ReziseContext.Provider value={size}>{children}</ReziseContext.Provider>
  );
};

export function useSize() {
  return useContext(ReziseContext);
}
