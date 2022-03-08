import { ReactElement } from 'react';

export interface ProductCardProps {
  product: Product
  children?: ReactElement | ReactElement[],
  className?: string
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
}

export interface ProductImageProps {
  img?: string,
  className?: string
}

export interface ProductButtonsProps {
  className?: string
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}