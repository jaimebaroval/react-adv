import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg'



export const ProductImage = () => {

   const { product } = useContext(ProductContext)!;
   const { img } = product;
   let imgToShow: string;

   if (img) {
      imgToShow = img;
   } else if (product?.img) {
      imgToShow = product?.img;
   } else {
      imgToShow = noImage;
   }

   return (
      <img className={styles.productImg} src={imgToShow} alt='Product' />

   )
}