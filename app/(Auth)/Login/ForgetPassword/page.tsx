"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { forgetPassword } from "@/app/Services/password/forgetpassword"
import toast from "react-hot-toast"

export default function ForgetPassword() {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: ""
    }
  })

  async function submitForm(values: { email: string }) {
    
    const res = await forgetPassword(values.email)

      console.log(res.data)

      if (res.statusMsg === "success") {
         toast.success(res.message)
        router.push("/Login/VerifyCode")
      }
      else {
        toast.error(res.message)
      }

    } 
  

  return <>
  <div className="w-1/2 mx-auto p-10 bg-gray-200 mt-5 rounded-2xl">

      <h2 className="text-3xl text-blue-900 font-bold text-center">
        Forget Password
      </h2>

      <form onSubmit={form.handleSubmit(submitForm)}>

        <div className="mt-4">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Email</FieldLabel>

                <Input
                  {...field}
                  className="bg-white"
                  placeholder="Enter your email"
                  type="email"
                />

                {fieldState.invalid &&
                  <FieldError errors={[fieldState.error]} />
                }
              </Field>
            )}
          />
        </div>

        <Button
          type="submit"
          className="bg-blue-900 w-full mt-5"
        >
          Send Reset Code
        </Button>

      </form>
    </div>
  </>
}