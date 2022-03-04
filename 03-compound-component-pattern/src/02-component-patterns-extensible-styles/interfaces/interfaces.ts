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

export interface ProductButtonsProps {
  increaseBy: (counter: number) => void
  counter: number
}

export interface ProductTitleProps { 
  title?:string, 
  className?:string 
}

export interface ProductImageProps {
  img?: string,
  className?: string
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title, className }: ProductTitleProps) => JSX.Element;
  Image: ({ img }: ProductImageProps) => JSX.Element;
  Buttons: () => JSX.Element;
}