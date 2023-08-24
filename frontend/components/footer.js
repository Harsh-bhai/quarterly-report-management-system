import React from 'react'
import Link from 'next/link'
import { ImFacebook } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div><footer className= "bg-gray-200  text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
        <span className="cursor-pointer ml-3 text-black text-2xl">
            <img src="/logo1.png"  className='w-20' alt="" />
        </span>
      </Link>






      <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© All Rights Reserved</p>
      {/* <span className="flex space-x-4 sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start md:mt-3">
      <Link href={'https://github.com/Harsh-bhai'} className="text-gray-500">
      <a target='_blank'><AiFillGithub className='text-cyan-600 text-xl cursor-pointer'/></a>
          </Link>
      <Link href={'https://discord.com/users/898776433638400041'} className="text-gray-500">
      <a target='_blank'><SiDiscord className='text-cyan-600 text-xl cursor-pointer'/></a>
          </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100014142857134  '} className="text-gray-500">
      <a target='_blank'>
      <ImFacebook className='text-cyan-600 cursor-pointer'/>
      </a>
          </Link>
     
        <Link href={'https://www.instagram.com/harshdew.12/'} className="ml-3 text-gray-500">
            <a target='_blank'><BsInstagram className='text-cyan-600 cursor-pointer'/></a>
          </Link>
          <Link href={'https://www.linkedin.com/in/harsh-dewangan-3a44b5232/'} className="ml-3 text-gray-500">
            <a target='_blank'><FaLinkedinIn className='text-cyan-600 cursor-pointer'/></a>
          </Link>
      </span> */}
    </div>
  </footer></div>
  )
}

export default Footer