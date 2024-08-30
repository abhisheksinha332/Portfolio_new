import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../style'
import { navLinks} from '../constants/constants'
import { logo, menu, close} from '../assets'

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to ='/' className='flex items-center gap-2' onClick={()=> {setActive(""); window.scrollTo(0,0)}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Abhishek Sinha </p>
        </Link>
        <ul className='list-none hidden sm:flex felex-row gap-10'>
            {navLinks.map((nav)=> (
              <li key={nav.id} 
              className= 'hover:text-white text-[20px] font-medium cursor-pointer'
              //{`${active === nav.id ? 'text-white' : 'text-secondary'}`}
              onClick={()=> setActive(nav, title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar