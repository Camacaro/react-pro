import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface IUseProduct {
  product: Product;
  onChange?: (args: onChangeArgs) => void
}

export const useProduct = ({ onChange, product }: IUseProduct) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
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
