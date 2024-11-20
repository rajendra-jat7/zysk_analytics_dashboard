import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons
import Logo from '../images/Logomark.svg';
import Avatar from '../images/Avatar.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center py-4 px-6'>
      <div className='flex items-center space-x-8'>
        <div className='flex items-center space-x-2'>
          <img src={Logo} className='w-8 h-8 rounded-full' alt='Logo' />
          <h1 className='text-lg font-bold'>Untitled UI</h1>
        </div>

        <div className='hidden lg:flex items-center space-x-6'>
          <a href='/' className='hover:text-gray-800'>
            Home
          </a>
          <div className='relative flex items-center gap-2'>
            <span>Products</span>
            <IoIosArrowDown />
          </div>
          <div className='relative flex items-center gap-2'>
            <span>Resources</span>
            <IoIosArrowDown />
          </div>
          <a href='/pricing' className='hover:text-gray-800'>
            Pricing
          </a>
        </div>
      </div>

      <div className='lg:hidden'>
        <button
          onClick={toggleMenu}
          className='text-2xl focus:outline-none'
          aria-label='Toggle Menu'
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-white z-50 shadow-md p-4`}
      >
        <a href='/' className='block py-2 hover:text-gray-800'>
          Home
        </a>
        <div className='block py-2 flex items-center gap-2'>
          <span>Products</span>
          <IoIosArrowDown />
        </div>
        <div className='block py-2 flex items-center gap-2'>
          <span>Resources</span>
          <IoIosArrowDown />
        </div>
        <a href='/pricing' className='block py-2 hover:text-gray-800'>
          Pricing
        </a>
      </div>

      <div className='hidden lg:block'>
        <img src={Avatar} alt='Profile' className='w-8 h-8 rounded-full' />
      </div>
    </nav>
  );
};

export default Navbar;
