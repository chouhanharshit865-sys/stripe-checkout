import { CarrotIcon, MenuIcon, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import Categories from './Categories'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const Navbar = () => {
    const {cartItems} = useCart()
    return (
      <div className="flex items-center justify-between ">
        <div className="flex items-center  gap-2 ">
          <img
            src="/vite.svg"
            alt="logo"
          />
          <h1 className="font-bold text-[32px] font-[cursive] ">
            Stripe Checkout
          </h1>
        </div>

        <Link
          to={'/cart'}
          className="relative cursor-pointer">
          <div className="relative cursor-pointer">
            <ShoppingCartIcon className="h-8 w-8 text-gray-700 hover:text-gray-900 transition" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    );
}

export default Navbar
