import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {Label,TextInput,Button,Alert, Spinner} from 'flowbite-react';
import { OAuth } from '../components/OAuth';

const SignUp = () => {
const [formData,setFormData]=React.useState({})
const [errorMessage,setErrorMessage]=React.useState(null);
const [loading,setLoading]=React.useState();
const navigate=useNavigate();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
    //console.log(formData);
  }

  const handleSubmit=async (e)=>{
  e.preventDefault();
  if(!formData.username || !formData.email || !formData.password)
  {
    return setErrorMessage('Please Fill All Fileds')
  }
try {
  setLoading(true);
  setErrorMessage(null);
  const res= await fetch('/api/auth/signup',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(formData),
  });


  const data=await res.json();
  if(data.success===false)
  {
    return setErrorMessage(data.message);
    
  }
  setLoading(false);
  if(res.ok)
  {
     navigate('/sign-in');
  }
} catch (error) {
  setErrorMessage(error.message);
  setLoading(false);

}
  }
  return (
    <div className="min-h-screen mt-20">
 
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
         <div className="flex-1 items-center">
         <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400  to-pink-400 rounded-md text-white'>Super</span>Blog
        </Link>
        <p className='text:sm mt-5'>
          Demo project A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less
        </p>
         </div>


    
      <div className="flex-1">
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <Label value='your name'/>
            <TextInput 
            type='text'
            placeholder='Username'
            id='username'
            onChange={handleChange}
            />
          </div>
          <div>
            <Label value='your email'/>
            <TextInput 
            type='email'
            placeholder='Email@gmail.com'
            id='email'
            onChange={handleChange}/>
          </div>
          <div>
            <Label value='your password'/>
            <TextInput 
            type='password'
            placeholder='Password'
            id='password'
            onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit' outline disabled={loading}>
            {
              loading?(
                <>  <Spinner size='sm'/>
                <span className='pl-3'>Loading... </span></>
              
              ):'Sign Up'
            }
          </Button>
          <OAuth/>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span >Have an account?</span>
          <Link to='\sign-in' className='text-blue-500'>
          Sign In
          </Link>
        </div>
        {
          errorMessage &&
        (
            <Alert className ='mt-5' color='failure'>{errorMessage}</Alert>
        ) 
        }
        </div>
      </div>
    </div>
    
  )
}

export default SignUp