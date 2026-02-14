
import Image from 'next/image'
import React from 'react'
import img1 from '../../assets/images/blog-img-1.jpeg'
import { SubCategoryItem } from '../interfaces/SubCategory'
import Link from 'next/link'

export default function SubCategorycard({sub} : {sub : SubCategoryItem}) {
  return <>

  <Link href={`/`}>

    <div className='rounded-2xl bg-white shadow m-4 h-40 flex items-center justify-center'>

      <h2 className="text-lg font-semibold text-gray-800 text-center px-4">
        {sub.name}
      </h2>

    </div>
  </Link>
  
 
  </>
}
