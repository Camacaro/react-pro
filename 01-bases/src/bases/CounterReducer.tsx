import { useReducer } from "react"

interface CounterState {
  counter: number
  previous: number
  changes: number
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number; } }
  | { type: "reset" }

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20,
}

const counterReducer = (state:CounterState, action:CounterAction): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      }

    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
  
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
  const { counter, changes, previous } = state
  
  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  const increaseBy = (value:number) => {
    dispatch({ type: 'increaseBy', payload: { value } })
  }

  return (
    <>
      <h1>Counter Reducer: {counter} </h1>
      <h4>Previous: {previous} </h4>
      <h4>Changes: {changes} </h4>

      <button onClick={() => increaseBy(1)}> +1 </button>
      <button onClick={() => increaseBy(5)}> +5 </button>
      <button onClick={() => increaseBy(10)}> +10 </button>

      <button onClick={handleReset}> reset </button>
    </>
  )
}
