import { createContext, FC, ReactElement, useContext } from 'react';
import noOmage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
/**
 * Crearlo de este modo con "module"
 * hace que el componente sea unico y se puede
 * tener el mismo nombre de la clase pero con
 * diferentes estilos ya que no seran los mismos
 * react le agrega un hash a la clase unico
 */
import styles from '../styles/styles.module.css';


interface Props {
  product: Product
  children?: ReactElement | ReactElement[],
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  product: Product,
  counter: number,
  increaseBy: (value:number) => void
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
const useProductContext = () => useContext(ProductContext);

export const ProductImage = ({ img = '' }) => {
  const { product } = useProductContext();

  const getImage = () => {
    if(img) return img;
    if(product.img) return product.img;
    return noOmage;
  }

  return (
    <img className={styles.productImg} src={getImage()} alt="Product Image" />
  )
}

export const ProductTitle = ({ title }: { title?:string }) => {
  const { product } = useProductContext()

  const titleShow = title ? title : product.title
  
  return (
    <span className={styles.productDescription} > {titleShow} </span>
  )
}

interface ProductButtonsProps {
  increaseBy: (counter: number) => void
  counter: number
}

// FC<ProductButtonsProps>
export const ProductButtons = ({ }) => {
  const { increaseBy, counter } = useProductContext()

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

export const ProductCard = ({ product, children }: Props) => {
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={styles.productCard}>
        
        {/* <ProductImage img={product.img} /> */}

        {/* <ProductTitle title={product.title} /> */}

        {/* <ProductButtons increaseBy={increaseBy} counter={counter} /> */}

        {children}

      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

