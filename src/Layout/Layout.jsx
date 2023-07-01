// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '/Components/Navbar/Navbar'
import Footer from '/Components/Footer/Footer'
//import { usecontextGlobal } from '../Components/utils/GlobalContext'
const Layout = () => {
  // const {theme} = usecontextGlobal()

  return (
    <div >
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout