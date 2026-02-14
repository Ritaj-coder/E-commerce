


export async function resetPassword(email:string , newPassword:string){

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,{
        method : 'PUT'  ,
        headers : {
            'Content-type' : 'application/json'
        } ,
        body : JSON.stringify({
            email , newPassword
        })
    })

    const data = await response.json()
    return data
}