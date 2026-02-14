
import { ProductItem } from '@/app/interfaces/ProductInterface'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import Slider from '@/app/_components/ProductSlider/page'
import AddBtn from '@/app/_components/addBtn/addBtn'

type myProps = {
  params : {
    id:string
  }
}

export default async function ProductDetails(props:myProps) {

  let {id} = await props.params 

  let response = await fetch (`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  
   let {data : SingleProduct}:{data : ProductItem}= await response.json()

    
  return <>
  
  <div className='grid md:grid-cols-3 gap-5 items-center mt-10'>

    <div className='md:col-span-1 mx-24'>
     <Slider images={SingleProduct.images}>
     </Slider>
    </div>

    <div className='md:col-span-2'>
       
       <Card className="relative w-full pt-0 p-10 font-bold">
  
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className='text-2xl'>{SingleProduct.brand.name}</Badge>
        </CardAction>
        <CardTitle className='text-3xl'>{SingleProduct.title}</CardTitle>
         
         <div>
          
           <CardDescription className='my-5'>
          <div className='flex justify-between '>
           
            <span>{SingleProduct.price} EGP</span>
         <span className='flex'>{SingleProduct.ratingsAverage} 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-amber-400">
  <path strokeLinecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
         </span>
          </div>
        
        </CardDescription>

         <CardDescription className='my-2'>
          
          {SingleProduct.description}
        
        </CardDescription>

         <CardDescription className='my-2 flex'>
           <p>In Stock : </p>
            <span className='text-sky-600 font-bold'>{SingleProduct.quantity}</span>
        
        </CardDescription>

         </div>
       
      </CardHeader>
  
     <AddBtn productId = {SingleProduct._id}/>
    </Card>

    </div>


  </div>
  </>
}
