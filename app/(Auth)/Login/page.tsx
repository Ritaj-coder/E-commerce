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
import { loginSchema } from '@/app/Schemas/loginSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import * as zod from "zod"
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Login() {

  const form = useForm({

    defaultValues : {
      email : '' ,
      password : ''
    } ,
   resolver : zodResolver(loginSchema)
  })

 async function submitForm (values : zod.infer<typeof loginSchema>) {
      
 const response = await  signIn('credentials' , {

      email : values.email ,
      password : values.password ,
      callbackUrl : '/' ,
      redirect : true
    })
    console.log(response);
    
  }
  return  <>
  
  <div className='w-1/2 rounded-2xl mx-auto p-10 bg-gray-200 mt-5'>
    <h2 className='text-3xl text-blue-900 font-bold text-center'>Login</h2>
  <form onSubmit={form.handleSubmit(submitForm)}>

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
        placeholder="Enter your Email" type='email'
      />
      <FieldDescription>
       
      </FieldDescription>
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
        placeholder="Enter your Password" type='password'
        />
    
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      <FieldDescription>
      </FieldDescription>
    </Field>
  )}  />

    </div>

    <Button type='submit' className='bg-blue-900 w-full mt-5 my-3'>Submit</Button>

 <Link href={'/Login/ForgetPassword'} className='text-center'>
         
         <h2>
        Forget Password ?
      </h2>
      </Link>
      

  </form>

  </div>

  </>
}
