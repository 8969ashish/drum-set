import React, { useState } from 'react'

const ShowPasswordIcon = () => {

    const [showPassword, setShowPassword]=useState('password')

    const ShowPasswordIcon=()=>
    {
        setShowPassword('text')
    }
    const HidePasswordIcon=()=>
    {
        setShowPassword('password')
    }

  return (
    <div className='h-screen center flex-col'>
        <div className='text-3xl m-5'>Show Password Eye</div>
    <div className=' h-[300px] w-[500px] bg-red-300 p-10 relative'>
        <input type={showPassword} className='w-80 border-2 border-black pl-3'/>
{showPassword==='password' && (<i class="fa-regular fa-eye-slash absolute top-[20%] right-[20%] text-4xl cursor-pointer "
        onClick={()=>ShowPasswordIcon()}
        ></i>)}

        
{showPassword==='text' && ( <i class="fa-regular fa-eye absolute top-[20%] right-[20%] text-4xl cursor-pointer"
         onClick={()=>HidePasswordIcon()}
        ></i>)}

       
    </div>
    </div>
  )
}

export default ShowPasswordIcon
