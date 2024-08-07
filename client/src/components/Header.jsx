import React from 'react'
//import Navbar from 'flowbite-react'
import { TextInput,Navbar,Button, Dropdown, Avatar} from 'flowbite-react';
import { Link,useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
import { useSelector,useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';


const Header = () => {
    const location=useLocation().pathname;
    const dispatch=useDispatch();
    const {theme}=useSelector((state) => state.theme)
    const {currentUser}=useSelector(state=>state.user)
  return (
   <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400  to-pink-400 rounded-md text-white'>Super</span>Blog
        </Link>
            <form action="">
                <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline'/>
            </form>
            <Button className='text-gray-300 lg:hidden'><AiOutlineSearch/></Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' pill onClick={()=>dispatch(toggleTheme())}>
                    {
                        theme==='light'?<FaMoon/>:<FaSun/>
                    }
                    </Button>
                {
                    currentUser?(
                    <Dropdown 
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                        alt='user'
                        img={currentUser.profilePicture}
                        rounded/>
                    }>
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={'/dashboard?tab=profile'}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    ):
                    
                    (<Link to='/sign-in'>
                        <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
                    </Link>)
                }
                
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse>
                    <Navbar.Link active={location==='/'} as={'div'}>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active={location==='/about'} as={'div'}>
                        <Link to='/about'>About</Link>
                    </Navbar.Link>
                    <Navbar.Link active={location==='/projects'} as={'div'}>
                        <Link to='/projects'>Projects</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
   </Navbar>
  )
}

export default Header