import React from 'react'
import {Link} from 'react-router-dom';
import {Label,TextInput,Button} from 'flowbite-react';
const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
 
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
         <div className="flex-1">
         <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400  to-pink-400 rounded-md text-white'>Super</span>Blog
        </Link>
        <p className='text:sm mt-5'>
          Demo project A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less
        </p>
         </div>


    
      <div className="flex-1">
        <form className='flex flex-col gap-4'>
          <div>
            <Label value='your name'/>
            <TextInput 
            type='text'
            placeholder='username'
            id='username'/>
          </div>
          <div>
            <Label value='your email'/>
            <TextInput 
            type='email'
            placeholder='Email@gmail.com'
            id='email'/>
          </div>
          <div>
            <Label value='your password'/>
            <TextInput 
            type='password'
            placeholder='Password'
            id='password'/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' outline>Sign Up</Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span >Have an account?</span>
          <Link to='\sign-in' className='text-blue-500'>
          Sign In
          </Link>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default SignUp