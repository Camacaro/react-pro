import { CSSProperties, ReactElement } from 'react';

export interface onChangeArgs {
  product:Product, 
  count:number
}
export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[],
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product,
  counter: number,
  increaseBy: (value:number) => void
}
export interface ProductTitleProps { 
  title?:string, 
  className?:string 
  activeClass?:string
  style?: CSSProperties
}

export interface ProductImageProps {
  img?: string,
  className?: string
  style?: CSSProperties
}

export interface ProductButtonsProps {
  className?: string
  style?: CSSProperties
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface ProductInCart extends Product {
  count: number
}

export interface IShoppingCart {
  [key: string]: ProductInCart
}