import { useState } from "react"

interface Props {
  initialValue?: number
}

interface CounterState {
  value: number
  clicks: number
}

export const CounterBy = ({initialValue = 5}: Props) => {
  const [{ value, clicks }, setCounter] = useState<CounterState>({
    value: initialValue,
    clicks: 0,
  });

  const handleClick = (valueAgg: number) => () => {
    setCounter(({clicks, value}) => ({
      clicks: clicks + 1,
      value: value + valueAgg
    }));
  }

  return (
    <>
      <h1>CounterBy: {value} </h1>
      <h1>Clicks: {clicks} </h1>

      <button onClick={handleClick(1)}> +1 </button>
      <button onClick={handleClick(5)}> +5 </button>
    </>
  )
}
