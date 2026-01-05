import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
    const navigate = useNavigate()
  return (
      <div className=' flex items-center justify-center gap-16' >
          {
              cats.map((cat) => (
                  <div  onClick={()=>navigate("/?cat="+cat.slug)} key={cat.slug}  className=" cursor-pointer  flex px-3 py-2 rounded-3xl shadow ">
                      <p>{cat.name }</p>
                  </div>
              ))
          }
      
    </div>
  )
}

export default Categories


const cats = [
  {
    slug: 'smartphones',
    name: 'Smartphones',
    url: 'https://dummyjson.com/products/category/smartphones',
  },
  {
    slug: 'fragrances',
    name: 'Fragrances',
    url: 'https://dummyjson.com/products/category/fragrances',
  },
  {
    slug: 'furniture',
    name: 'Furniture',
    url: 'https://dummyjson.com/products/category/furniture',
  },
  {
    slug: 'groceries',
    name: 'Groceries',
    url: 'https://dummyjson.com/products/category/groceries',
  },
  {
    slug: 'home-decoration',
    name: 'Home Decoration',
    url: 'https://dummyjson.com/products/category/home-decoration',
  },
];
