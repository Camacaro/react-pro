import { useProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?:string }) => {
  const { product } = useProductContext()

  const titleShow = title ? title : product.title
  
  return (
    <span className={styles.productDescription} > {titleShow} </span>
  )
}