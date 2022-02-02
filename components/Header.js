import React from 'react';
import logo from "./../assets/img/logo.png";
import Image from 'next/image';
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row items-center sm:justify-between h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="Home" Icon={HomeIcon}/>
        <HeaderItem title="Verified" Icon={BadgeCheckIcon}/>
        <HeaderItem title="Collections" Icon={CollectionIcon}/>
        <HeaderItem title="Trending" Icon={LightningBoltIcon}/>
        <HeaderItem title="Search" Icon={SearchIcon}/>
        <HeaderItem title="Account" Icon={UserIcon}/>
      </div>
      <Image className='object-contain' src={logo} alt="Logo for Netflix clone" width={200} height={57} />
    </header>
  );
};

export default Header;
