import React from 'react'
import { Categories } from './Categories'
import { useState,useEffect } from 'react'
import axios from 'axios'





export const Home = () => {

    const [categories, setcategories] = useState([])
    const [products, setProducts] = useState([])
  
   

    const API_CATEGORIES=`https://dummyjson.com/products/categories`
    const API_ALL_PRODUCTS=`https://dummyjson.com/products`



    
    const getCategories=(API)=>{
  
      axios(API)
      .then((res)=>{
  
        setcategories(res.data)
      })
      .catch((err)=>console.log(err))
    }
  
    //sayfa ilk render olduğunda gelen veriler
    const get_all_products=(API)=>{
    axios(API)
    .then((res)=>setProducts(res.data.products))
    .catch((err)=>console.log(err))
  }

    useEffect(() => {
  
      getCategories(API_CATEGORIES)
  
    }, [])


    useEffect(() => {
        get_all_products(API_ALL_PRODUCTS)
    }, [])

  return (
    <>

    <Categories categories={categories}/>
    </>
  )
}
