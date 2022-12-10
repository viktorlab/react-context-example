import { createContext, ReactNode, useReducer } from 'react';
import { countReducer } from './reducers';
import type { CountContextType, State } from './types';

type CountProviderProps = { children: ReactNode };

export const CountContext = createContext<CountContextType | undefined>(undefined);

export function CountProvider({ children }: CountProviderProps) {
  const initialState: State = { count: 0 };

  const [state, dispatch] = useReducer(countReducer, initialState);

  const value = { state, dispatch };

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}
