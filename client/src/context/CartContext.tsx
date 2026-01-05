import type { ICartItem, IProduct } from '@/types'
import React, { createContext, useContext, useState } from 'react'

interface ICartContextType {
  cartItems: ICartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  changeQuantity: (type: 'increment' | 'decrement', product: IProduct) => void;
}


const CartContext = createContext<ICartContextType>({cartItems:[], setCartItems(){}, changeQuantity:()=>{}})

const CartProvider = ({children}:{children:React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>(JSON.parse(localStorage.getItem("cartItems")||"[]"))

    const changeQuantity = (
      type: 'increment' | 'decrement',
      product: IProduct
    ) => {
      const quantity =
        cartItems.find(item => item.productId === product.id)?.quantity || 0;

      let copy = [...cartItems];
      if (quantity === 0) {
        copy.push({ quantity: 1, product, productId: product.id });
      } else {
        let qnty = quantity;
        if (qnty === 1 && type === 'decrement') {
          copy = copy.filter(i => i.productId !== product.id);
        } else {
          type === 'increment' ? qnty++ : qnty--;
          copy = copy.map(i =>
            i.productId === product.id ? { ...i, quantity: qnty } : i
          );
        }
      }

      setCartItems(copy);
      localStorage.setItem('cartItems', JSON.stringify(copy));
    };
  return (
      <CartContext.Provider value={{ cartItems,changeQuantity, setCartItems }} >
          {children}
          
    </CartContext.Provider>
  )
}

export default CartProvider;


export const useCart = () => useContext(CartContext);

