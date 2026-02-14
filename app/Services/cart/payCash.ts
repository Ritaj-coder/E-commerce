
'use server'
import { ShippingAddress } from "@/app/interfaces/cartResponse"
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function PayCash(cartId:string , shippingAddress:ShippingAddress){

    const authToken = (await cookies()).get('next-auth.session-token')?.value
    const token = await decode({
        token : authToken ,
        secret : process.env.AUTH_SECRET!
    })

    if(!token) {
         
        throw new Error('UnAuthorized')
    }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , {
        method : 'POST' ,
        headers : {
            token : token?.token ,
            'Content-type' : 'application/json'
        } ,
        body : JSON.stringify({
           shippingAddress
        })
        
    })
    const payload = await response.json()
    return payload

}