import { useContext } from 'react';
import { CountContext } from './countContext';
import type { CountContextType } from './types';

export function useCount(): CountContextType {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
