import React from 'react'
import { FaGithub } from "react-icons/fa";

import Logo from '../../assets/logo.png'
 import { NavLink } from 'react-router';
 import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";



const Navbar = () => {

 const links =<>
  <div className='flex gap-2'>
     <NavLink to='./' className={({ isActive }) => isActive ? 'flex items-center gap-2 border-b-2 border-[#632EE3] m-2 font-bold text-purple-600' : 'flex items-center gap-2 m-2 '}>
     <IoHomeOutline size={18} />
     <li>Home</li>
   </NavLink>
   <NavLink to='./apps' className={({ isActive }) => isActive ? 'flex items-center gap-2 border-b-2 border-[#632EE3] m-2 font-bold text-purple-600' : 'flex items-center gap-2 m-2'}>
     <FaAppStore size={18} />
     <li>Apps</li>
   </NavLink>
   <NavLink to='./productList' className={({ isActive }) => isActive ? 'flex items-center gap-2 border-b-2   border-[#632EE3] m-2 font-bold text-purple-600' : 'flex items-center gap-2 m-2'}>
     <MdInstallDesktop size={18} />
     Installation
   </NavLink>
  </div>
</>

  return (
    <div className="navbar bg-base-100 shadow-sm p-2">
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
      <NavLink to="./" className=" text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold  ">HERO.IO</NavLink>
   
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>

  <div className="navbar-end">
   <a
  href="https://github.com/mdasifmahmuddev"
  className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium 
             bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
>
  <span color="#632EE3" className=" p-1 rounded-full">
    <FaGithub size={20}  />
  </span>
  Contribute
</a>

  </div>



</div>
  )
}

export default Navbar