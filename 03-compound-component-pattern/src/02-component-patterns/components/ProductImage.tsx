import { useProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noOmage from '../assets/no-image.jpg';

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
