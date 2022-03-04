import { ProductTitleProps } from "../interfaces/interfaces";
import { useProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title, className }: ProductTitleProps) => {
  const { product } = useProductContext()

  const titleShow = title ? title : product.title
  
  return (
    <span className={`${styles.productDescription} ${className}`} > {titleShow} </span>
  )
}