/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(Math.floor(Math.random() * 1000));
  }, []);
  return (
    <div>
      <h1>App</h1>
      <div>{String(state)}</div>
      <button onClick={() => setState((n) => n + 1)}>+</button>
    </div>
  );
}
