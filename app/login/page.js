'use client'
import Link from 'next/link'; // imported from next.js package
import {useRef, useState} from 'react'; // useref and usestate(manages state ) are imported from react package
import React from 'react';
import { useEffect } from 'react';

const page = () =>{
    const [user,setUser]=useState(null)
    
    const [password,setPassword]=useState(null)
    const [data,setData]=useState(null)
    useEffect(() => {
        const getData = async () => {
          const results = await fetch('http://localhost:3000/api')
          const res = await results.json()
          setData(res.results)
        }
        getData()
      },[])

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
    

    

            <div className="p-10 bg-white space-y-8
            ">
                <div className=" text-blue-600 font-semibold flex flex-col"> 
                     <label for="uname"> UserName</label>
                     <input 
                     onChange={(e)=>{ // onChange is an event handler that updates the respective state variables.
                         setUser(e.target.value)
                         console.log(user)
                        }
                     } 
                     value={user} 
                     className="bg-slate-800 text-white px-2 py-1"
                     type="text" id="uname" name ="uname"/>                    
                </div>
                <div className="  text-blue-600 font-semibold flex flex-col space-y-2">
                    <label for="password"> Password</label>
                    <input 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                        console.log(password)
                    }
                }
                value={password}
                    className="bg-slate-800 text-white px-2 py-1"
                    type="text" id="password" name ="password"/>                
                </div>
                <button 
                    type="submit"
                    className="bg-slate-800 text-white px-2 py-1 ">
                    Log in 
                </button>
                <div>
                    <Link href='/Forgotpassword'>
                        Forgot password
                    </Link>
                </div>

            
                </div>
            </div> 
        
    )
}

export default page