import { Counter } from "./bases/Counter";
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from "./bases/CounterEffect";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />

      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterEffect />
    </>
  );
}

export default App;
