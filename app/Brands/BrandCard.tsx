
import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';
import { BrandItem } from '../interfaces/BrandInterface';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Brands",
  description: "Brands available in the app",
};


export default function BrandCard({brand}:{brand:BrandItem}) {
  return <>

  <Link href={`/Brands/${brand._id}`}>
  
  <div className='mx-auto w-full max-w-sm pt-5 px-8 '>
    <img src= {brand.image} alt= {brand.name} />
  </div>

  </Link>

  
  </>
}
