'use client'

import React,{useState,useEffect} from 'react'
import {MagnifyingGlassIcon,TrashIcon,PencilIcon} from '@heroicons/react/24/solid'
import {Card} from '../../components'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const [data,setData] = useState([])
  const [search, setSearch] = useState('')
  const keys = ['deptname','ccode','extnumber']
  useEffect(() => {
    const getData = async () => {
      const results = await fetch('http://localhost:3000/api')
      const res = await results.json()
      setData(res.results)
    }
    getData()
  },[])
  console.log(data)

  return (
    <div className='h-screen relative text-black bg-white items-center'>
      {/* Header */}
      <div className='flex space-x-5 px-10 py-1 bg-white shadow-black shadow-md'>
        <img 
        className='w-[150px]'
        src="/jkuatLogo.png" 
        alt="" />
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-[36px]'>Jomo Kenyatta University Of Agriculture And Technology</h2>
          <h3 className='font-semibold text-lg'>Setting Trends in Higher Education,Research and Innovation</h3>
        </div>
      </div>

      {/* Body */}
      <div className='w-full flex flex-col items-center space-y-3'>
        {/* Top section */}
        <div className='flex flex-col items-center pt-4 space-x-2'>
          <h2 className='font-bold text-xl'>JKUAT ONLINE TELEPHONY DIRECTORY </h2>
          <div className='relative'>
            <input
            onChange={(e) => setSearch(e.target.value)}
            className='font-semibold border-slate-700 placeholder:text-slate-500 flex px-2 py-1 w-[400px] rounded-md border-2'
            placeholder='Search by department,extension,campus...' 
            type="text" />
            <MagnifyingGlassIcon className='text-black cursor-pointer h-5 w-5 absolute right-2 top-2'/>
          </div>
        </div>

        {/* Display Cards */}
        <div className='flex flex-col space-y-2'>
          {data?.filter((f) => keys.some((k) => {
            const res = f[k].toString()
            return res.toLowerCase().startsWith(search)
          }) ).slice(1,8).map((d) => (
            <div key={d.id} className='flex flex-row-reverse items-center space-x-2'>
                <div className='flex flex-col items-center space-x-2'>
                    <TrashIcon 
                    onClick={() => router.push(`/admin/${d.extnumber}/delete`) }
                    className='w-4 h-4 cursor-pointer text-red-600'/>
                    <PencilIcon 
                    onClick={() => router.push(`/admin/${d.extnumber}/edit`) }
                    className='w-4 h-4 cursor-pointer text-green-600'/>
                </div>
                <Card
                ext={d.extnumber}
                dpt={d.deptname}
                campus={d.ccode}
                />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div></div>
      </div>

      {/* Footer */}
      <div className='bg-green-600 text-white font-bold flex justify-center py-2 absolute bottom-0 w-full'>
      All rights reserved 
      </div>
    </div>
  )
}

export default page
