import { useCart } from '@/context/CartContext';
import { CheckCircleIcon } from 'lucide-react';
import React from 'react';

const SuccessPage: React.FC = () => {
    const {setCartItems} = useCart()
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been processed
          successfully, and your order is now confirmed.
        </p>

        <div className="bg-green-100 text-green-700 rounded-lg p-4 mb-6">
          <p className="text-sm">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>

        <button
                  onClick={() => {
                      window.location.href = '/';
                      setCartItems([]);
                      localStorage.setItem("cartItems","[]")
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
