import { AuthOptions } from './../node_modules/next-auth/core/types.d';

import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { FailLogin, SuccessLogin } from './interfaces/AuthInterface';
import { log } from 'console';


export const authOptions : NextAuthOptions= {
    
  pages : {
    signIn : '/Login' ,
  } ,
    providers: [

  Credentials({
    name: 'credentials',
    credentials: {
      email: { label: "Email", type: "email"},
      password: { label: "Password", type: "password" }
    },

   authorize : async (credentials) => {
     
      const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
        method: 'POST',
        body: JSON.stringify({
            email : credentials?.email ,
            password : credentials?.password
        }),
        headers: { "Content-Type": "application/json" }
      })
      const payload : SuccessLogin | FailLogin = await response.json()
         
      console.log(payload);
      
      if('token' in payload) {

        return {
          id : payload.user.email ,
          user : payload.user ,
          token : payload.token
        }
      } else {
        throw new Error ('Error...')
      }
    }
  })
],

callbacks : {

  jwt:({token , user})=>{
    
    if (user) {

      token.user = user.user
    token.token = user.token

    }
    return token

  } , session : ({session , token})=>{

    session.user = token.user
          
    return session
  }
}

}
