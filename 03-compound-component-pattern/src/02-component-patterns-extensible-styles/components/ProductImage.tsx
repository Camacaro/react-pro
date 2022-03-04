import { useProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noOmage from '../assets/no-image.jpg';
import { ProductImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ img = '', className }: ProductImageProps) => {
  const { product } = useProductContext();

  const getImage = () => {
    if(img) return img;
    if(product.img) return product.img;
    return noOmage;
  }

  return (
    <img 
      className={`${styles.productImg} ${className}`} 
      src={getImage()} 
      alt="Product Image" />
  )
}
