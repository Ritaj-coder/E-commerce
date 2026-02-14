'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { CardFooter,} from "@/components/ui/card"
import { AddtoCart } from '@/app/Services/cart/addcart'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from "react-hot-toast"
import { AddtoWishlist } from '@/app/Services/wishlist/addwishlist'


export default function AddBtn({productId}:{productId : string}) {

  const queryClient =  useQueryClient()

  const {data , isPending , error , isError , mutate:addProduct} =  useMutation({
    mutationFn : AddtoCart ,
    onSuccess : (data)=>{
        toast.success(data?.message)
        queryClient.invalidateQueries({queryKey : ['get-cart']})
    } ,
    onError : () =>{
     toast.error('Login First !')
    window.location.href= '/Login'
    }
    })

     const queryClientWishlist =  useQueryClient()

     const { mutate: addToWishlist } = useMutation({
    mutationFn: AddtoWishlist,
    onSuccess: (data) => {
      toast.success(data?.message)
      queryClientWishlist.invalidateQueries({ queryKey: ['get-wishlist'] })
    },
    onError: () => {
      toast.error('Login First!')
      window.location.href = '/Login'
    },
  })
  
  return <>
  
  <CardFooter className='flex flex-col'>
        <span>
      <Button onClick={()=>{
        addProduct(productId)
      }} className="w-full my-3">Add to Cart</Button>
        </span>
 <span>
      <Button onClick={()=>{
        addToWishlist(productId)
      }} className="w-full bg-red-800">Add to WishList</Button>
        </span>
  
        
      </CardFooter>
  
  </>
}
