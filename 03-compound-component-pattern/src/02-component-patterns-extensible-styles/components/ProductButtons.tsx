import { useProductContext } from "./ProductCard";
import { ProductButtonsProps } from "../interfaces/interfaces";

import styles from '../styles/styles.module.css';

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { increaseBy, counter } = useProductContext()

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button 
        className={styles.buttonMinus} 
        onClick={() => increaseBy(-1)}
      >
        -
      </button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button 
        className={styles.buttonAdd} 
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  )
}
