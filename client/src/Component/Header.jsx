import React from 'react';
import { Navbar, TextInput, Button, NavbarToggle } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>ooooop</span>
        Blog
      </Link>
      <form>
        <TextInput className='hidden lg:inline' type='text' placeholder='search....' rightIcon={AiOutlineSearch} />
      </form>
      <Button className='w-12 h-10 hidden sm:flex items-center justify-center rounded-full text-black lg:hidden'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:flex items-center justify-center rounded-full bg-gray-200 text-teal-500'>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button className='w-12 h-10 hidden sm:flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-nowrap px-10'>
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
