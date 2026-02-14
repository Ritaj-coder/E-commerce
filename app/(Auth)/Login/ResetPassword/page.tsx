"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import toast from "react-hot-toast"
import {
  Field,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { resetPassword } from "@/app/Services/password/resetPassword"

export default function ResetPassword() {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: "",
      newPassword: ""
    }
  })

  async function submitForm(values: {
    email: string
    newPassword: string
  }) {

     const res = await resetPassword(values.email , values.newPassword)

    if (res.token) {
         toast.success('Password changed')
        router.push("/Login")
      }
      else {
        toast.error(res.message)
      }
    }
  return <>
  
   <div className="w-1/2 rounded-2xl mx-auto p-10 bg-gray-200 mt-5">

      <h2 className="text-3xl text-blue-900 font-bold text-center">
        Reset Password
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

        {/* NEW PASSWORD */}
        <div className="mt-4">

          <Controller
            name="newPassword"
            control={form.control}
            render={({ field, fieldState }) => (

              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>New Password</FieldLabel>

                <Input
                  {...field}
                  className="bg-white"
                  placeholder="Enter new password"
                  type="password"
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
          Reset Password
        </Button>

      </form>

    </div>
  </>
}