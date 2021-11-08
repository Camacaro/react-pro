import { useEffect, useState } from "react"

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);


  useEffect(() => {
    if(counter < MAXIMUN_COUNT) return;

    console.log('%c Valor maximo', 'color: green; background-color: white;')

  }, [counter])
  

  const handleClick = () => {
    // if(counter < MAXIMUN_COUNT) {
    //   setCounter(prev => prev + 1);
    // };

    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
  }

  return (
    <>
      <h1>CounterEffect: {counter} </h1>

      <button onClick={handleClick}> +1 </button>
    </>
  )
}
