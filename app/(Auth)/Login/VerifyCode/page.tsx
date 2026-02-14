"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { useForm , Controller } from "react-hook-form"
import { verifyCode } from "@/app/Services/password/verifycode"
import toast from "react-hot-toast"
import {
  Field,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function VerifyCode() {

  const router = useRouter()

  const form = useForm({
    defaultValues: {
      resetCode: ""
    }
  })

  async function submitForm(values: { resetCode: string }) {

    const res = await verifyCode(values.resetCode.trim())

    console.log("CODE:", values.resetCode)
    
    if (res.status === "Success") {
         toast.success('The Verify Code is correct')
        router.push("/Login/ResetPassword")
      }
      else {
        toast.error(res.message)
      }

  }

  return <>
  
  <div className="w-1/2 rounded-2xl mx-auto p-10 bg-gray-200 mt-5">

      <h2 className="text-3xl text-blue-900 font-bold text-center">
        Verify Code
      </h2>

      <form onSubmit={form.handleSubmit(submitForm)}>

        <div className="mt-4">

          <Controller
            name="resetCode"
            control={form.control}
            render={({ field, fieldState }) => (

              <Field data-invalid={fieldState.invalid}>

                <FieldLabel>Reset Code</FieldLabel>

                <Input
                  {...field}
                  className="bg-white"
                  placeholder="Enter 6 digit code"
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
          className="bg-blue-900 w-full mt-5" >
          Verify Code
        </Button>

      </form>

    </div>

  
  </>
}