import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Cards from './Cards'

function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout