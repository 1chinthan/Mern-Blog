import React from 'react'
import { Footer } from 'flowbite-react'
import {Link} from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitterX,BsGithub} from 'react-icons/bs'
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-400'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full max-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-400 via-purple-400  to-pink-400 rounded-md text-white'>Super</span>Blog
          </Link>
          </div>
          <div className='grid grid-cols-2 mt-5 gap-8 sm:mt-4  sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About'/>
              <Footer.LinkGroup col>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Watch
                  </Footer.Link>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Terminal
                  </Footer.Link>
              </Footer.LinkGroup>
            
            </div>
            <div>
              <Footer.Title title='Follow Us'/>
              <Footer.LinkGroup col>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Watch
                  </Footer.Link>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Terminal
                  </Footer.Link>
              </Footer.LinkGroup>
            
            </div>
            <div>
              <Footer.Title title='Legal'/>
              <Footer.LinkGroup col>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link
                   href='https://www.google.com'
                   target='_blank'
                   rel='nooperner noreferrer'>
                    Terms & Conditions
                  </Footer.Link>
              </Footer.LinkGroup>
            
            </div>
          </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href='#' by='Super blog' year={new Date().getFullYear()}/>
        </div>
        <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>
          <Footer.Icon href='#' icon={BsGithub}/>
          <Footer.Icon href='#' icon={BsTwitterX}/>
          
        </div>
      </div>
    </Footer>
  )
}
