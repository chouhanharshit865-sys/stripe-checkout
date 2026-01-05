import CartItemCard from '@/components/CartItemCard';
import CheckoutForm from '@/components/CheckoutForm';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems } = useCart()
    const navigate = useNavigate()
    
     return (
       <div className=" px-12">
         <div className=" flex flex-col gap-4 sticky top-0 bg-white z-10 py-4 ">
           <Navbar />
         </div>

         {cartItems.length === 0 ? (
           <div className="flex justify-center">
             <Button
               className=" mt-12 mx-auto "
               size={'lg'}
               onClick={() => {
                 navigate('/');
               }}>
               Add items
             </Button>
           </div>
         ) : (
           <div className="flex gap-24 w-[80%] mx-auto py-12 ">
             <div className="flex flex-col gap-4 flex-1  ">
               {cartItems.map(item => (
                 <CartItemCard
                   key={item.productId}
                   cartItem={item}
                 />
               ))}
             </div>

             <CheckoutForm />
           </div>
         )}
       </div>
     );
}

export default CartPage
