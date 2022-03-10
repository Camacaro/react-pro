import { useState, useEffect, useRef } from 'react';
import { IUseProduct } from '../interfaces/interfaces';

export const useProduct = ({ 
  onChange,
  product, 
  value = 0, 
  initialValues 
}: IUseProduct) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  useEffect(() => {
    if(!isMounted.current) return;

    setCounter(value);
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, [])

  const reset = () => {
    setCounter(initialValues?.count || 0);
  }
  
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0 )

    if(initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount)
    }

    setCounter(newValue);

    onChange && onChange({
      product,
      count: newValue,
    });
  }

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count &&  initialValues?.maxCount === counter,
    increaseBy,
    reset,
  }
}
