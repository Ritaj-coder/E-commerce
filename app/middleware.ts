
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'


const protectedPages = ['/Cart' , '/Profile' , '/Wishlist']
const AuthPages = ['/Login' , '/Register']

export async function middleware(req:NextRequest) {

 const token = await getToken({req})

 if(protectedPages.includes(req.nextUrl.pathname)){

    if(token){
    return NextResponse.next()
 }
 else {
    let redirectURL = new URL('/Login' , process.env.NEXTAUTH_URL)

    return NextResponse.redirect(redirectURL)
 }
 }

 if(AuthPages.includes(req.nextUrl.pathname)){

    if(!token){
    return NextResponse.next()
 }
 else {
    let redirectURL = new URL('/' , process.env.NEXTAUTH_URL)

    return NextResponse.redirect(redirectURL)
 }
 }

 return NextResponse.next()

 
}
