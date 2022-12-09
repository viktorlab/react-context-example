import { CountProvider } from './context/countContext';
import { useCount } from './context/useCount';

function CountDisplay(): JSX.Element {
  const {
    state: { count }
  } = useCount();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter(): JSX.Element {
  const { dispatch } = useCount();
  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment count</button>;
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement count</button>;
    </>
  );
}

function App(): JSX.Element {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  );
}

export default App;
