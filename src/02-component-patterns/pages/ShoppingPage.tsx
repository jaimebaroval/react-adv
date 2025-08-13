import { ProductCard } from "../components/ProductCard"
import styles from '../styles/styles.module.css'

const product1 = {
   id: '1',
   title: 'Coffee Mug',
   img: './coffee-mug.png'
}

export const ShoppingPage = () => {
   return (
      <div className={styles.shoppingPage}>
         <h1>Shopping Page</h1>
         <div className={styles.buttonsContainer}>
            <ProductCard product={product1} >
               <ProductCard.Image />
               <ProductCard.Title />
               <ProductCard.Buttons />
            </ProductCard>
         </div>
      </div>
   )
}
