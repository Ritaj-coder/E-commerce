
import Image from 'next/image'
import React from 'react'
import { Category } from '../interfaces/CategoryInterface'
import Link from 'next/link'

export default function CategoryCard({cat}:{cat : Category}) {
  return <>
  
  <Link href={`/SubCategory/${cat._id}`}>
  
  <div className='rounded-2xl bg-white shadow m-4'> 

    <div className='relative'>

        <Image src={cat.image} alt = {cat.name} width={400} height={250} className='w-full h-48 object-cover'/>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-xl font-bold bg-black/50 px-4 py-2 rounded-xl">
           {cat.name}
          </h2>
        </div>
    </div>

  </div>
  </Link>
  
  </>
}
