
import { Metadata } from 'next';
import React from 'react'
import { ProductItem } from '../interfaces/ProductInterface';
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
import Link from 'next/link';
import Image from 'next/image';
import AddBtn from '../_components/addBtn/addBtn';


export const metadata: Metadata = {
  title: "Products",
  description: "Products of the app",
};


export default function ProductCard({prod}:{prod:ProductItem}) {
  return <>
   
   <Card className="relative mx-auto w-full max-w-sm pt-0">
     
    <Link href={`/ProductDetails/${prod._id}`}>
      <Image
        src={prod.imageCover}
        alt={prod.title}
        width={200} height={300}
        className="relative"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{prod.brand.name}</Badge>
        </CardAction>
        <CardTitle>{prod.title}</CardTitle>
        <CardDescription className='flex justify-between mt-2'>
         <span>{prod.price} EGP</span>
         <span className='flex'>{prod.ratingsAverage} 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-amber-400">
  <path strokeLinecap="round"
   strokeLinejoin ="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 
   0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563
    0 0 0 .475-.345L11.48 3.5Z" />
</svg>
         </span>
        </CardDescription>
      </CardHeader>
    </Link>
          
          <AddBtn productId = {prod._id} />
      
    </Card>


  
  </>
}
