import type { IProduct } from '@/types';
import React from 'react'
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }: { product: IProduct }) => {
    const { cartItems,changeQuantity, setCartItems } = useCart();

    

    const quantity = cartItems.find((item)=>item.productId===product.id)?.quantity||0
  return (
    <div className=" flex flex-col gap-2 w-[280px]  shadow-md rounded-sm p-2 ">
      <img
        src={product.images[0]}
        alt="img"
      />
      <h3 className=" font-bold text-[18px] ">{product.title}</h3>
      <div className="flex items-center gap-2 ">
        {product.tags.map(tag => (
          <div
            className="flex rounded-2xl px-2 py-1 shadow bg-[#baf8b4] "
            key={tag}>
            {tag}
          </div>
        ))}
          </div>
          
          <p className=' font-semibold ' >Rs { product.price}</p>

      <p className=" text-wrap text-ellipsis line-clamp-2 overflow-hidden ">
        {product.description}
      </p>

      {/* add to cart */}

      {Boolean(quantity) ? (
        <div className="flex items-center gap-2 ">
          <Button
            className=""
            onClick={() => changeQuantity('decrement', product)}>
            <Minus />{' '}
          </Button>
                  <span>{ quantity}</span>

          <Button onClick={() => changeQuantity('increment', product)}>
            <Plus />{' '}
          </Button>
        </div>
      ) : (
        <Button onClick={() => changeQuantity('increment', product)}>
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default ProductCard
