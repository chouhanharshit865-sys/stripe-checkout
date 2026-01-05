import type { ICartItem } from '@/types'
import React from 'react'
import { Button } from './ui/button';
import { useCart } from '@/context/CartContext';
import { Minus, Plus } from 'lucide-react';

const CartItemCard = ({ cartItem }: { cartItem: ICartItem }) => {
    const { product, quantity } = cartItem;
    const {changeQuantity} = useCart()
  return (
    <div className=" flex justify-between items-start shadow rounded-2xl p-4 ">
      <div className="flex gap-3">
        <img
          src={product.images[0]}
          alt="img"
          className=" w-32 shadow rounded-2xl "
        />
        <div className="flex flex-col gap-1 ">
          <h3 className=" font-bold text-[18px] ">{product.title}</h3>
          <p>Rs{product.price}</p>
          <div className="flex">
            <p>Qnty: {quantity}</p>
          </div>
        </div>
      </div>

      {/* add to cart */}

      <div className="space-y-2">
        <div className="flex items-center gap-2 ">
          <Button
            className=""
            onClick={() => changeQuantity('decrement', product)}>
            <Minus />{' '}
          </Button>
          <span>{quantity}</span>

          <Button onClick={() => changeQuantity('increment', product)}>
            <Plus />{' '}
          </Button>
        </div>

        <div className="flex">
                  <p>Total: Rs {(product.price*quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard
