import { createContext, useContext, useReducer } from 'react';
import { countReducer } from './reducers';
import type { CountContextType } from './types';

type CountProviderProps = { children: React.ReactNode };

export const CountContext = createContext<CountContextType | undefined>(undefined);

export function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const value = { state, dispatch };

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}
