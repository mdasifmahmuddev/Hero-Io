import React from 'react'
import { Outlet, useNavigation } from "react-router"
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className=''>
      <Navbar></Navbar>
      
       {navigation.state === 'loading' && (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )}
      
       {navigation.state !== 'loading' && <Outlet></Outlet>}
      
      <Footer></Footer>
    </div>
  )
}

export default Root