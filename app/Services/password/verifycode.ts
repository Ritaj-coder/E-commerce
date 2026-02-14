

export async function verifyCode(resetCode:string){

    const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,{
        method : 'POST'  ,
        headers : {
            'Content-type' : 'application/json'
        } ,
        body : JSON.stringify({
            resetCode
        })
    })

    const data = await response.json()
    return data
}