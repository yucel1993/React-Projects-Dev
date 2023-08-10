import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation,useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { new_item } from '../store/ItemsReducer'
import {BsCartPlus} from 'react-icons/bs'


export const ItemDetails = () => {

  const {state} = useLocation()
  const {id} = useParams()

  const dispatch=useDispatch()

  const products=useSelector((state)=>state.items.products)


  return (
   
    <div className="md:container px-10 mx-auto py-5">
    <h1 className="text-center text-white text-3xl"></h1>
    
    <div className="md:container flex justify-center px-10">
      <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 shadow-lg">
        <img
          className=" lg:w-1/3  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={state?.thumbnail}
          alt="poster"
        />
        <div className="p-6 flex flex-col justify-between">
        
          <div>
            
            <div className='flex justify-between items-center'>
            <p className="text-gray-700 text-base mb-3">Category : {state?.category}</p>
            <BsCartPlus size={'25px'} className='hover:cursor-pointer hover:text-blue-500' onClick={()=>dispatch(new_item(state))}/>
            </div>
            

            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {state?.title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{state?.description}</p>
          </div>

          <ul className="bg-gray-100 rounded-lg border border-gray-400 text-gray-900">
            <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
              {"Price : $ " + state?.price}
            </li>
            <li className="px-6 py-2 border-b border-gray-400 w-full">
              {"Stock : " + state?.stock }
            </li>
            <li className="px-6 py-2 border-b border-gray-400 w-full">
              {"Rating : " + state?.rating}
            </li>
            <li className="px-6 py-2 border-gray-400 w-full rounded-t-lg">
              <Link
                to={-1}
                className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
              >
                Go Back
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  )
}
