import { useState } from "react";

export const useProduct = () => {

   const [counter, setCounter] = useState<number>(0);

   const increaseBy = (value: number) => {
      setCounter(counter + value);
   }

   return {
      counter,
      increaseBy
   }
}
export default useProduct;