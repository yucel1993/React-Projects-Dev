import React from 'react'
import { Route, Routes } from 'react-router'
import Navs from '../components/Navs'
import { ItemDetails } from '../pages/ItemDetails'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Basket } from '../pages/Basket'

export const AppRouter = () => {


  return (

    <>
    
    <Navs/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/details/:id' element={<ItemDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    

    </>
  )
}
