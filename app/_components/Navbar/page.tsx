
'use client' 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import NavImg from '../../../assets/images/trolley.png'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { Badge } from "@/components/ui/badge"
import { DropdownMenuBasic } from '../dropdown/page'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { CartResponse } from '@/app/interfaces/cartResponse'


export default function Navbar() {

    const {data:cartData , isLoading , isError} = useQuery<CartResponse>({

    queryKey : ['get-cart'] ,
    queryFn : async ()=>{

      const response = await fetch('/api/cartcode')
      const payload = await response.json()

      return payload
    }

  })


  const {status , data:session} = useSession()

 const [isOpen , setIsOpen] = useState(false)

 function Logout(){
  signOut({

    callbackUrl : '/Login'
  })
 }

 function toggleNav(){
  setIsOpen(!isOpen)
 }

 const pathname = usePathname()

  const path = [
    {href : '/' , content : 'Home'} ,
     {href : '/Categories' , content : 'Categories'} ,
      {href : '/Brands' , content : 'Brands'} ,
      
  ]

   const AuthPath = [
    {href : '/Login' , content : 'Login'} ,
     {href : '/Register' , content : 'Register'} ,
  ]

  return <>
  
 
<nav className="bg-blue-300 py-2">
  <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap md:gap-20 items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image src={NavImg} alt="logo" width={50} height={50} />
      <span className="self-center text-3xl text-heading font-semibold whitespace-nowrap">Luxora</span>
    </a>

    <button onClick={toggleNav} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor"  strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>
    </button>

    <div className={` ${!isOpen && 'hidden' } w-full md:flex justify-between`} id="navbar-default">

      <ul className="text-lg font-bold flex flex-col p-4 md:p-0 mt-4  rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
      
      {path.map((elem)=>{
        return  <li key={elem.content}>
          <Link href={elem.href} className={`block py-2 px-3 transition
                    ${pathname === elem.href
                      ? 'text-black font-bold'
                      : 'text-white hover:text-black'}
                  `} aria-current="page">{elem.content}</Link>
        </li>
      })}
       </ul>

       <ul className="text-lg font-bold flex justify-center items-center flex-col p-4 md:p-0 mt-4  rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
      
      

      {status  == 'authenticated' ? <>
        <li className='text-white mt-2'>Hi , {session?.user?.name}</li>

        <li className='relative'>

          {cartData?.numOfCartItems > 0 ?  <Badge className='bg-blue-600 text-white p-1 
          rounded-full absolute start-0 top-[20px] left-5'>{cartData?.numOfCartItems}</Badge> : ''}

          <Link href={'/Cart'}>

         
          <svg xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="size-6 mt-3"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
  />
</svg>




          </Link>

        </li>

         <Link href={'/Wishlist'}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

          </Link>

        <DropdownMenuBasic logout= {Logout}>

        </DropdownMenuBasic>
      </> 
    : AuthPath.map((elem)=>{
        return  <li key={elem.content}>
          <Link href={elem.href} className={`block py-2 px-3 transition
                    ${pathname === elem.href
                      ? 'text-black font-bold'
                      : 'text-white hover:text-black'}
                  `} aria-current="page">{elem.content}</Link>
        </li>
      })}

      
     
       </ul>

    </div>
  </div>
</nav>

  </>
}
