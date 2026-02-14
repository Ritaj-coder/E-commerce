
'use server'
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function UserOrders(){

    const authToken = (await cookies()).get('next-auth.session-token')?.value
    const token = await decode({
        token : authToken ,
        secret : process.env.AUTH_SECRET!
    })

    if(!token) {
         
        throw new Error('UnAuthorized')
    }

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders` , {
        method : 'GET' ,
        headers : {
            token : token?.token ,
            'Content-type' : 'application/json'
        } 
        
    })
    const payload = await response.json()
     const userId = token?.id || token?.sub 
  const userOrders = payload.data.filter((order: any) => order.user._id === userId)

  return userOrders

}