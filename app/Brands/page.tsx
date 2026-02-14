
import React from 'react'
import { ProductItem } from '../interfaces/ProductInterface'
import BrandCard from './BrandCard'
import { BrandItem } from '../interfaces/BrandInterface'


export default async function Brands() {

  let response = await fetch('https://ecommerce.routemisr.com/api/v1/brands')

  let {data:allBrands}:{data : BrandItem[]} = await response.json()

  return <>

     <div className='grid md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
       
      {allBrands.map((brand)=>{return <BrandCard key={brand._id} brand={brand}/> })}


     </div>

  </>
}
