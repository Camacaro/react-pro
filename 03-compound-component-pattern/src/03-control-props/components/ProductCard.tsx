import { createContext, useContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
/**
 * Crearlo de este modo con "module"
 * hace que el componente sea unico y se puede
 * tener el mismo nombre de la clase pero con
 * diferentes estilos ya que no seran los mismos
 * react le agrega un hash a la clase unico
 */
import styles from '../styles/styles.module.css';

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const useProductContext = () => useContext(ProductContext);

export const ProductCard = ({ product, children, className, style, onChange }: ProductCardProps) => {
  const {counter, increaseBy} = useProduct({ onChange, product })

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
