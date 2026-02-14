
'use server'
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function GetWishlist(){

    const authToken = (await cookies()).get('next-auth.session-token')?.value
    const token = await decode({
        token : authToken ,
        secret : process.env.AUTH_SECRET!
    })

    if(!token) {
         
        throw new Error('UnAuthorized')
    }

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist' , {
        method : 'GET' ,
        headers : {
            token : token?.token ,
            'Content-type' : 'application/json'
        } 
        
    })
    const payload = await response.json()
    return payload

}