'use client'
import React from 'react'
import {useRef,useState} from 'react'


const page = () => {
    const{user,setUser}=useState(null)
    const{newpassword,setNewPassword}=useState(null)
    const{confirmPassword,setconfirmPassword}=useState(null)
    const handleUser =(e) =>{
        setUser(e.target.value)
        console.log(user)
    }

  return (

        <div className="h-screen bg-black flex items-center justify-center  flex-col">
             <img 
            className='w-[150px]'
            src="/jkuatLogo.png" 
            alt="" />
            <div className='flex flex-col items-center text-white space-y-3'>
                <h2 className='font-bold text-lg'>Jomo Kenyatta University Of Agriculture And Technology</h2>
                <h4 className='font-bold text-xl'>JKUAT ONLINE TELEPHONY DIRECTORY </h4>
            </div>
            <div className="p-10 bg-white space-y-5">
                <div className='flex flex-col space-y-2'>
                    <div className=" text-blue-600 font-semibold flex flex-col"> 
                        <label for="uname"> UserName</label>
                        <input 
                          onChange={handleUser}
                    
                    value={user}
                        className="bg-slate-800 text-white px-2 py-1"
                        type="text" id="uname" name ="uname"/>                    
                    </div>
                    <div className="  text-blue-600 font-semibold flex flex-col space-y-2">
                        <label for="password"> New Password</label>
                        <input 
                          onChange={(e)=>{
                            setNewPassword(e.target.value)
                            console.log(newpassword)
                        }
                    }
                    value={newpassword}
                        className="bg-slate-800 text-white px-2 py-1"
                        type="text" id="password" name ="password"/>  
                        </div>
                    <div className="  text-blue-600 font-semibold flex flex-col space-y-2">
                        <label for="password"> Confirm Password</label>
                        <input 
                          onChange={(e)=>{
                            setconfirmPassword(e.target.value)
                            console.log(confirmpassword)
                        }
                    }
                    value={confirmPassword}
                        className="bg-slate-800 text-white px-2 py-1"
                        type="text" id="password" name ="password"/> 
                    </div>
                </div>
                <button 
                    type="submit"
                    className="bg-slate-800 text-white px-2 py-1  ">
                    Set password
                </button>              
            </div>
        </div>
        
  )
}

export default page
