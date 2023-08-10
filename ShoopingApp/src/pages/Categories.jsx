import React from 'react'
import { useState } from 'react'
import { Items } from './Items'

export const Categories = ({categories}) => {

    const [secilendata, setsecilendata] = useState("")

  return (
    <div className=' m-auto text-center items-center gap-3 p-5'>

    <h3 className='p-3 text-red-600 text-xl tracking-[0.7rem]'>Categories</h3>

        <select name="" id="" onChange={(e)=>setsecilendata(e.target.value)} className='p-2 w-[300px] border-2 border-inherit rounded-full'>
        {

          
          categories.map((items)=>(
            
            
            <option value={items}>{items}</option>
           
            
          ))
             
        }      
    
    </select>

    <Items secilendata={secilendata} />

    </div>
  )
}
