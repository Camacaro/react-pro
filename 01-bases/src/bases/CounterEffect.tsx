import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    if(counter < MAXIMUN_COUNT) return;

    console.log('%c Valor maximo', 'color: green; background-color: white;')

    // Con negativo sube - Esto no es la manera correcta de hacerlo
    // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    // })

    // Esta es la manera de hacerlo correcta
    const timeline = gsap.timeline();
    // timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
    // timeline.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    timeline
      .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

  }, [counter])
  

  const handleClick = () => {
    // if(counter < MAXIMUN_COUNT) {
    //   setCounter(prev => prev + 1);
    // };

    setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
  }

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterElement}>{counter} </h2>

      <button onClick={handleClick}> +1 </button>
    </>
  )
}
