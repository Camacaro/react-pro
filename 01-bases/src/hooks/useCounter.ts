import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// const MAXIMUN_COUNT = 10;

export const useConter = ({ maxCount = 1 }) => {

  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);
  const timeline = useRef( gsap.timeline() );

  useLayoutEffect(() => {

    if(!elementToAnimate.current) return;

    timeline
      .current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();
  }, [])

  useEffect(() => {
    // if(counter < maxCount) return;

    console.log('%c Valor maximo', 'color: green; background-color: white;')

    // timeline
    //   .current
    //   .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
    //   .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })

    timeline.current.play(0);

  }, [counter])

  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, maxCount));
  }

  return {
    counter,
    handleClick,
    elementToAnimate
  }
}