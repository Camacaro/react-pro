import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface IUseProduct {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: IUseProduct) => {

  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value])
  
  const increaseBy = (value: number) => {
    if(isControlled.current) {
      return onChange!({ product, count: value });
    }
    
    const newValue = Math.max(counter + value, 0 )

    setCounter(newValue);

    onChange && onChange({
      product,
      count: newValue,
    });
  }

  return {
    counter,
    increaseBy
  }
}
