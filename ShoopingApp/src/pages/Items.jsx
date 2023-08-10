import React, { useContext,useEffect,useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import {MdAttachMoney} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, new_item, successInfo } from '../store/ItemsReducer';
import {BiCartAdd} from 'react-icons/bi'
import {AiOutlineRead} from 'react-icons/ai'
import {toastSuccessNotify} from '../helper/ToastNotify'



export const Items = ({secilendata}) => {

  let navigate=useNavigate()

  const [products, setProducts] = useState([])

  const dispatch=useDispatch()


  const API_SELECT_PRODUCTS=`https://dummyjson.com/products/category/${secilendata}`
  const API_ALL_PRODUCTS=`https://dummyjson.com/products`



  useEffect(() => {
    get_all_products(API_ALL_PRODUCTS)
  }, [])

  useEffect(() => {
    get_select_Products(API_SELECT_PRODUCTS)
  }, [secilendata])
  



  
  //kategori seçildiğinde gelen veriler
  const get_select_Products=(API)=>{
    axios(API)
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  }
  
  //sayfa ilk render olduğunda gelen veriler
  const get_all_products=(API)=>{
    axios(API)
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  }

 

  

  return (
    
  
    <div className='flex flex-wrap justify-center items-center gap-3 my-5'>

    {
      
      products.map((item,i)=>{

        return(

        <div className="max-w-sm flex flex-wrap justify-center items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


        <div className='cardImg'>
          <img className="rounded-t-lg" src={item?.thumbnail} alt="" />
        </div>

        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.title}
            </h5>
          </div>
          <div className="mb-3 font-normal flex flex-wrap justify-center items-center text-gray-700 dark:text-gray-400">
          <MdAttachMoney size={'22px'}/>
          {item?.price}
          </div>

          <div className='flex flex-wrap justify-center items-center gap-2 bg-orange-200 p-3 rounded-md w-32 text-center m-auto hover:bg-orange-300 hover:cursor-pointer'>

          <AiOutlineRead className='hover:text-white' size={'30px'} onClick={()=>navigate(`details/${item?.id}`,{state:item})}/>
          {/* <BiCartAdd className='hover:text-white' size={'30px'} onClick={()=>dispatch(new_item(item))}/> */}
          <BiCartAdd className='hover:text-white' size={'30px'} onClick={()=>dispatch(new_item(item))}/>
          
          </div>

        </div>
      </div>
      

        )
      })

    }

    </div>
  )
}
