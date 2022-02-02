import React from 'react';
import request from '../util/request'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='relative'>
      <div className='flex sm:justify-center px-4 sm:px-6 text-md  whitespace-nowrap space-x-6 sm:space-x-12 overflow-x-scroll scrollbar-hide'>
        {Object.entries(request).map(([key, {title, url}]) => (
          <h2 key={key} onClick={()=> router.push(`/?genre=${key}`)} className='last:pr-10 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    </nav>
    );
};

export default Navbar;
