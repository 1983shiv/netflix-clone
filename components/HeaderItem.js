import React from 'react'; 
import Link from 'next/link'

const HeaderItem = ({ title, Icon, link}) => {
  
  return (
    <Link href={link}>
      <a className='group flex flex-col items-center cursor-pointer mt-4 w-12 sm:w-20 hover:text-white'>
        <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
        <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
      </a>
    </Link>
  );
};

export default HeaderItem;
