
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function GET(req:NextRequest) {

    const token = await getToken({req})
    if(!token) {
        return NextResponse.json({msg:'unAuthorized' , status : 401})
    }

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/cart' ,
        {
            headers : {
                token : token.token ,
                'Content-type' : 'application/json' 
            }
        }
    )
    const payload = await response.json()
    
  return NextResponse.json(payload)
}
