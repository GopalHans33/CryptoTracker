import React from 'react'
import AnchorTemporaryDrawer from './Drawer'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className='flex justify-between items-center px-6 py-12 bg-gray-900 sticky top-0 left-0'>
      <Link to='/'><h1 className='w-full bg-rgb(46, 46, 46) text-slate-100 text-3xl'><span className='text-violet-500'>Crypo</span>Tracker</h1></Link>
      <div className='hidden justify-end items-center gap-6 text-slate-400 font-medium text-lg md:flex'>
        <Link to="/" className='hover:text-white'>Home</Link>
        <Link to="/compare" className='hover:text-white'>Compare</Link>
        <Link to="/dashboard" className='hover:text-white'>
          <Button text="Dashboard" onclick={()=>console.log("Hello")} outline = {true}/>
        </Link>
      </div>
      <div className='md:hidden'>
        <AnchorTemporaryDrawer/>
      </div>
      </nav>
    </>
  )
}

export default Header