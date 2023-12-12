import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import Login from '../Login'

const Rout = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/' element={<Login />}></Route>

  </Routes>
  </BrowserRouter>
  </>
  )
}

export default Rout;