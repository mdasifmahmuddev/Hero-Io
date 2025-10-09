import React from 'react'

import Logo from '../../assets/logo.png'
import { GithubIcon  } from "lucide-react";


const Navbar = () => {

  const links =<>
  <li className='m-2'>Home</li>
  <li className='m-2'>Apps</li>
    <li className='m-2'>Installation</li>

  </>


  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex justify-between items-center  m-2'>
         <a className="text-xl px-1.5">

          <img className='h-8 w-auto' src={Logo}alt="" />


         </a>
      <a className=" text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold  ">HERO.IO</a>
   
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>

  <div className="navbar-end">
   <a
  href="#"
  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium 
             bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
>
  <span className="bg-white p-1 rounded-full">
    <GithubIcon size={20} color="#632EE3" />
  </span>
  Contribute
</a>

  </div>



</div>
  )
}

export default Navbar