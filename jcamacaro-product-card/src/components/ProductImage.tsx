import * as React from 'react';

import { useProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';
import noOmage from '../assets/no-image.jpg';
import { ProductImageProps } from "../interfaces/interfaces";

export const ProductImage = ({ img = '', className, style }: ProductImageProps) => {
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
      style={style}
      alt="Product Image" />
  )
}
