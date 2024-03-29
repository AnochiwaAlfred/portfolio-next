"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {title:"About", path:"#about"},
  {title:"Projects", path:"#projects"},
  {title:"Contact", path:"#contacts"},
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed mx-auto border border-[#33353F] border-l-0 border-t-0 border-r-0top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex lg:py-4 container items-center justify-between mx-auto px-8 py-4'>
            <Link href={"/"} className='text-lg md:text-5xl text-white font-semibold'>LOGO</Link>
            <div className='mobile-menu block md:hidden'>
              {navbarOpen ? (
                  <button onClick={()=> setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5'/></button>
                ) : (
                  <button onClick={()=> setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5'/></button>
              )}
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
              <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
              {
                navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))
              }
              </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar