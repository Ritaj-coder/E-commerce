

import * as zod from "zod"

 export const RegisterSchema = zod.object({
     
    name : zod.string().nonempty('Name is required').min(3,'Name must be min 3').max(5,'Name must be max 5'),

    email : zod.string().nonempty('Name is required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,
      'Invalid Email') ,

    password : zod.string().nonempty('Password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,
      'Invalid Password') ,

      rePassword : zod.string().nonempty('rePassword is required') ,

        phone : zod.string().nonempty('Phone is required').regex(/^01[0125][0-9]{8}$/ , 'Invalid Phone')
    }).refine((data)=>
      data.password === data.rePassword , {path : ['rePassword'] ,
        message : 'Invalid Repassword'})