

export async function forgetPassword(email:string){

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,{
        method : 'POST'  ,
        headers : {
            'Content-type' : 'application/json'
        } ,
        body : JSON.stringify({
            email
        })
    })

    const data = await response.json()
    return data
}