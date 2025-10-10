import React from 'react'
import { Outlet, useNavigation } from "react-router"
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  const navigation = useNavigation()

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      {navigation.state === 'loading' ? (
        <div className="flex items-center justify-center flex-1 min-h-[calc(100vh-100px)]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <main className="flex-1">
          <Outlet />
        </main>
      )}

      <Footer />
    </div>
  )
}

export default Root
