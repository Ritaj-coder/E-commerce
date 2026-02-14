"use client"
import React from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import {RegisterSchema} from '../../Schemas/RegisterSchema'
import * as zod from "zod"
import { useRouter } from 'next/navigation'

export default function Register() {

 const router = useRouter()

  const form = useForm({
  
    defaultValues : {
      name : '' ,
          email : '' ,
          password : ''  ,
          rePassword : '' ,
          phone : ''
        } ,
       resolver : zodResolver(RegisterSchema)
      })

  async function submitForm (values : zod.infer<typeof RegisterSchema>) {

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup' ,{
      method : 'POST' ,
      body : JSON.stringify(values) , headers : {
        'Content-type' : 'application/json'
      }
    })
    const payload = await response.json()

    if(payload.message = 'success') {
      router.push('/Login')
    }
  
    }

  return  <>
  
  <div className='w-1/2 rounded-2xl mx-auto p-10 bg-gray-200 mt-5'>
  <h2 className='text-3xl text-blue-900 font-bold text-center'>Register</h2>

  <form onSubmit={form.handleSubmit(submitForm)}>

    <div className='mt-4'>

     <Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>UserName : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your Name"  type='text'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>

    <div className='mt-4'>

     <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your Email"  type='email'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>

    <div className='mt-4'>

     <Controller
  name="password" 
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter Your Password" type='password'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>

    <div className='mt-4'>

     <Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Confirm Password : </FieldLabel>
      <Input className='bg-white '
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Conform Your Password"  type='password'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

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
        placeholder="Enter Your Phone"  type='number'
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

    </div>

    <Button type='submit' className='bg-blue-900 w-full mt-5'>Submit</Button>
  </form>

  </div>
  
  </>
}
