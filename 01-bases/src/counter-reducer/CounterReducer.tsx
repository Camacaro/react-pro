import { useReducer } from "react"
import { CounterState } from "./interfaces/interface"
import { counterReducer } from "./state/counterReducer"
import { doIncreaseBy, doReset } from './actions/actions';

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
}

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const { counter, changes, previous } = state
  
  const handleReset = () => dispatch( doReset() )

  const increaseBy = (value:number) => dispatch( doIncreaseBy(value) )

  return (
    <>
      <h1>Counter Reducer Segmentado: {counter} </h1>
      <h4>Previous: {previous} </h4>
      <h4>Changes: {changes} </h4>

      <button onClick={() => increaseBy(1)}> +1 </button>
      <button onClick={() => increaseBy(5)}> +5 </button>
      <button onClick={() => increaseBy(10)}> +10 </button>

      <button onClick={handleReset}> reset </button>
    </>
  )
}
