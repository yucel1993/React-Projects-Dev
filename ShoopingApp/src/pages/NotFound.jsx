import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NotFound = () => {

  let navigate=useNavigate()
  return (
    
    <div className='text-center'>

    <div className='p-3 my-10'>
    <h1 className='text-[50px] text-red-600'>Not Found</h1>
    </div>

    <div className='flex flex-wrap justify-center items-center gap-3 p-3 my-5'>
      
      <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded w-32" onClick={()=>navigate(-1)}>
        Back
      </button>
      
      <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded w-32" onClick={()=>navigate('/')}>Home</button>
      
    </div>

    </div>
  )
}
