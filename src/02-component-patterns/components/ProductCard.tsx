import { createContext, ReactElement, useState } from 'react';

import styles from '../styles/styles.module.css'
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButton';

interface ProductCardProps {
   product: ProductProps;
   children?: ReactElement | ReactElement[];
}

interface ProductProps {
   id: string;
   title: string;
   img?: string;
}

interface ProductCardContextProps {
   product: ProductProps;
   counter: number;
   increaseBy: (value: number) => void;
}

export const ProductContext = createContext<ProductCardContextProps | undefined>(undefined);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
   const [counter, setCounter] = useState(0);

   const increaseBy = (value: number) => {
      setCounter(prev => prev + value);
   };

   return (
      <Provider value={{
         product,
         counter,
         increaseBy
      }}>
         <div className={styles.productCard}>
            {children}
         </div>
      </Provider>
   );
}

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
