import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Home from './pages/Dashboard';
import Home from './pages/About';
import Home from './pages/Sign-in';
import Home from './pages/Sign-up';
import Project from './pages/Project'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Sign-in/>}/>
        <Route path='/sign-up' element={<Sign-up/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
