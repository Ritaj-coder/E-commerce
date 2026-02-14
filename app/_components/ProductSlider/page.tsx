'use client' 
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

export default function Slider({images}:{images:string[]}) {
  return <>
  
  <Carousel opts={{
    loop: true,
  }}
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
  >
  <CarouselContent>
    
    {images.map((src)=>{
        return <CarouselItem>
        <Image
                src={src}
                alt={src}
                width={200} height={300}
                className="relative"
              />
    </CarouselItem>
    })}
   
  </CarouselContent>
 
</Carousel>

  
  </>
}
