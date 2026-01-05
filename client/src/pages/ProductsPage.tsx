import Categories from '@/components/Categories'
import Navbar from '@/components/Navbar'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products'
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductsPage = () => {
    const { search } = useLocation()
    const category = new URLSearchParams(search).get("cat")||"smartphones"
  return (
    <div className=" px-12">
      <div className=" flex flex-col gap-4 sticky top-0 bg-white z-10 py-4 ">
        <Navbar />

        <Categories />
      </div>

      <div className="flex flex-wrap gap-4 py-4 ">
        {products
          .find(p => p.category === category)
          ?.data.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductsPage
