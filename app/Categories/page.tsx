
import React from 'react'
import { Category } from '../interfaces/CategoryInterface'
import CategoryCard from './CategoryCard'

export default async function Categories() {

  let response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
  let {data : allCategories} : {data : Category[]} = await response.json()


  return <>
  <div className='grid md:grid-cols-3 md:gap-5 '>

      {allCategories.map((cat)=>{
         return <CategoryCard key={cat._id} cat = {cat}/>
      })}
  </div>
  
  
  </>
}
