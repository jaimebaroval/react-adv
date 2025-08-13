import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {

   const pContext = useContext(ProductContext);

   const increaseBy = pContext?.increaseBy ?? (() => { });
   const counter = pContext?.counter ?? 0;

   return (
      <div className={styles.buttonsContainer}>
         <button className={styles.buttonMinus}>-</button>
         <button className={styles.buttonLabel}>{counter}</button>
         <button onClick={() => increaseBy(1)} className={styles.buttonAdd}>+</button>
      </div>
   )
}