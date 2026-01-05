import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { calculateTotal, showErrMsg } from '@/lib/utils';
import api from '@/lib/axios';
import { useCart } from '@/context/CartContext';

const CheckoutForm = () => {
  const { cartItems } = useCart();
    const [isLoading, setIsLoading] = useState(false);
    const totalAmount= calculateTotal(cartItems)
  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
      const { email } = Object.fromEntries(formData);
      
    try {
      setIsLoading(true);
      const { data } = await api.post('/stripe/create-checkout-session', {
        orderItems: cartItems,
          email,
        totalAmount:parseFloat(totalAmount),
      });

      const { url } = data;
      window.location.href = url;
    } catch (error) {
      showErrMsg(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-[360px] ">
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center pb-1 border-b">
          <p>Total:</p>
          <p>Rs {totalAmount}</p>
        </div>
      </div>
      <form
        action=""
        onSubmit={handleCheckout}
        className="">
        <div className="flex flex-col gap-1 ">
          <label htmlFor="email">Email address</label>
          <Input
            type="email"
            required
            name="email"
            placeholder="john@gmail.com"
          />
        </div>

        <Button
                  className="w-full mt-3"
                  disabled={isLoading}
          type="submit">
          Checkout
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
