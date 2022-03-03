import { FC } from 'react';
import { useProduct } from '../hooks/useProduct';

/**
 * Crearlo de este modo con "module"
 * hace que el componente sea unico y se puede
 * tener el mismo nombre de la clase pero con
 * diferentes estilos ya que no seran los mismos
 * react le agrega un hash a la clase unico
 */
import styles from '../styles/styles.module.css'
import noOmage from '../assets/no-image.jpg'

interface Props {
  product: Product
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductImage = ({ img = '' }) => {
  return (
    <img className={styles.productImg} src={img ? img : noOmage} alt="Product Image" />
  )
}

export const ProductTitle = ({ title }: { title:string }) => {
  return (
    <span className={styles.productDescription} > {title} </span>
  )
}

interface ProductButtonsProps {
  increaseBy: (counter: number) => void
  counter: number
}

export const ProductButtons: FC<ProductButtonsProps> = ({ increaseBy, counter }) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  )
}



export const ProductCard: FC<Props> = ({ product  }) => {
  const {counter, increaseBy} = useProduct()

  return (
    <div className={styles.productCard}>
      
      <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons increaseBy={increaseBy} counter={counter} />
    </div>
  )
}
