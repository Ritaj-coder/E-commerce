'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import { DeleteWishlist } from '../Services/wishlist/deletewishlist'
import { GetWishlist } from '../Services/wishlist/getwishlist'
import { WishList, WishListResponse } from '../interfaces/WishListResponse'

export default function Wishlist() {
    const queryClient =  useQueryClient()

  const {data:wishlistData , isLoading , isError} = useQuery<WishListResponse>({

    queryKey : ['get-wishlist'] ,
    queryFn : GetWishlist

  })

  //Delete Wishlist

 const {mutate:delwishlist , isPending } = useMutation({
    mutationFn : DeleteWishlist ,
    onSuccess : ()=>{
      toast.success('Product Deleted')
     queryClient.invalidateQueries({queryKey : ['get-wishlist']})

    } ,
    onError : ()=>{
      toast.error('Error')
    }
  })



  if(isLoading) {
    return <h2>Loading</h2>
  }

  if(isError) {
    return <h2>Error</h2>
  }

  return <>
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
  <table className="w-full text-sm text-left rtl:text-right text-body">
    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Product
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    
    {wishlistData?.data.map((prod)=>{

      return  <tr key={prod._id} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="p-4">
          <img src={prod.imageCover} className="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-heading">
         {prod.title}
        </td>
        <td className="px-6 py-4">
      
          <span className='font-bold'>{prod.quantity}</span>
          
        </td>
        <td className="px-6 py-4 text-heading text-sky-700 font-bold">
         {prod.price} EGP
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>{delwishlist(prod._id)}} className="font-medium text-red-700 hover:text-red-900 cursor-pointer">Remove</span>
        </td>
      </tr>
    })}
     
    </tbody>
  </table>
</div>



  

  
  


  
  </>
}
