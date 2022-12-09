export type Action = { type: 'increment' | 'decrement' };
export type State = { count: number };
export type Dispatch = (action: Action) => void;
export type CountContextType = { state: State; dispatch: Dispatch };
