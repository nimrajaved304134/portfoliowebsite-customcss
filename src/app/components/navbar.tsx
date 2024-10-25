
import Link from 'next/link'
import React from 'react'
import Menu from '../components/menu'

const Navbar = () => {
  return (
<nav className='h-14 text-stone-700 p-4 flex items-center justify-around space-x-2 border-b-8 border-b-rose-500 border-8 border-opacity-40 uppercase md:h-24 lg:px-20 xl:px-40'>

    <div className='text-3xl font-bold md:font-extrabold flex-1 md:text-center italic '>
       <Link href='/' className='items-center justify-between text-center mx-8 md:justify-end'> NIMRA&apos;S PORTFOLIO </Link> 
    </div>

    <div className='hidden md:flex gap-4 flex-1 justify-end font-semibold'>
    <Link href={"/"} className="mr-5 hover:text-blue-800 hover:text-3xl">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-800 hover:text-3xl">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-800 hover:text-3xl">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-blue-800 hover:text-3xl">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-blue-800 hover:text-3xl">
              Contact
            </Link>
    </div>

    <div className='md:hidden px-6'>
        <Menu />
    </div>

    </nav>
  )
}

export default Navbar