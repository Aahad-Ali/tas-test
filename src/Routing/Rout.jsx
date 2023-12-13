import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import Login from '../Login'

const Rout = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {
            localStorage.getItem("token") === null ?
              <Route path='/' element={<Login />}></Route>
              :
              <Route path='/' element={<Home />}></Route>

          }

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rout;