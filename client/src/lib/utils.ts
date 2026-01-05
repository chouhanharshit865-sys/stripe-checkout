import type { ICartItem } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { toast } from "react-toastify"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const showErrMsg = (err:any)=>{
  toast.error(err.response?.data?.message||"Something went wrong!")
}


export const calculateTotal = (cartItems: ICartItem[]) => {
  const total = cartItems.reduce((acc, item) => {
    return acc+=item.product.price*item.quantity

    
  }, 0)
  
  return (total).toFixed(2)
}