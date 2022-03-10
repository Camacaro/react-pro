import { CSSProperties, ReactElement } from 'react';

export interface onChangeArgs {
  product:Product, 
  count:number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}
export interface ProductCardProps {
  product: Product
  // children?: ReactElement | ReactElement[],
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product,
  counter: number,
  increaseBy: (value:number) => void,
  maxCount?: number
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

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value:number) => void;
  reset: () => void;
}

export interface IUseProduct {
  product: Product;
  onChange?: (args: onChangeArgs) => void
  value?: number,
  initialValues?: InitialValues
}