
"use client"
import React, { useState } from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import * as zod from "zod"
import { PayCash } from '@/app/Services/cart/payCash'
import { ShippingAddress } from '@/app/interfaces/cartResponse'
import toast from 'react-hot-toast'
import { PayOnline } from '@/app/Services/cart/payonline'


export default function CheckoutForm({cartId}:{cartId:string}) {

   const [isOnline , setisOnline]= useState(true)

   async function payCash(cartId:string , shippingAddress:ShippingAddress){
     const response = await  PayCash(cartId , shippingAddress)

     console.log(response);
     
     if(response.status == 'success'){
      toast.success('order will be delivered')
      window.location.href = '/'
     }
else {
  toast.error('error')
}
    }

   async function payOnline(cartId:string , shippingAddress:ShippingAddress){
     const response = await  PayOnline(cartId , shippingAddress)

     console.log(response);
     
     if(response.status == 'success'){
      toast.success('order will be delivered')
      window.location.href = response.session.url
     }
else {
  toast.error('error')
}
    }

  const form = useForm({

    defaultValues : {
      details : '' ,
      city : '' ,
      phone : ''
    } 
  })

 async function submitForm (values:ShippingAddress) {
      
  const shippingAddress = {
    ...values
  }

  if(isOnline){
         payOnline(cartId , shippingAddress)
  }
    else {
      payCash(cartId , shippingAddress)
    }
    

  }

  return  <>
  
  <div className='w-1/2 rounded-2xl mx-auto p-10 bg-gray-200 mt-5'>
    <h2 className='text-3xl text-blue-900 font-bold text-center'>CheckOut</h2>
  <form onSubmit={form.handleSubmit(submitForm)}>

    <div className='mt-4'>   

     <Controller
  name="details"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Details : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your details" type='text'
      />
    </Field>
  )}
/>

    </div>

     <div className='mt-4'>
         
     <Controller
  name="city"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>City : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your city" type='text'
        />

    </Field>
  )}  />

    </div>

     <div className='mt-4'>
         
     <Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Phone" type='number'
        />

    </Field>
  )}  />

    </div>

    <Button onClick={()=>{
      setisOnline(false)
    }} type='submit' className='bg-blue-900 w-full mt-5'>Pay Cash</Button>
    <Button onClick={()=>{
      setisOnline(true)
    }} type='submit' className='bg-blue-900 w-full mt-5'>Pay Online</Button>

  </form>

  </div>

  </>
}
