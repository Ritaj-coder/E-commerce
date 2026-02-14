
import React from 'react'
import ProductCard from '@/app/Products/ProductsCard'
import { ProductItem } from '@/app/interfaces/ProductInterface'

type MyProps = {
  params : {
    id:string
  }
}

export default async function BrandDetails({ params }: MyProps) {

    let {id} = await params 

     let response = await fetch (`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`)

    const result = await response.json()

  const BrandData: ProductItem[] = result.data || []
  return <>

  <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>

      {BrandData.map((prod) => (
        <ProductCard key={prod._id} prod={prod} />
      ))}
    </div>

  

  </>
}
