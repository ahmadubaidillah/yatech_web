/*  ./components/Navbar.jsx     */
'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 ' style={{background:'#F2F4F7'}}>
        <Link href='/'className='inline-flex items-center p-2  ml-5'>
            <Image
              src="/logo.png"
              alt="Yatech Logo"
              className="dark:invert"
              width={113}
              height={32}
              priority
            />
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-slate-800 ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:mx-auto lg:w-auto w-full lg:items-center items-center  flex flex-col lg:h-auto'>
            <Link href='/' className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-slate-800 font-medium text-base items-center justify-center hover:underline underline-offset-8 hover:text-blue-600'>
                Home
            </Link>
            <Link href='/' className='lg:inline-flex  lg:w-auto w-full px-5 py-2 rounded text-slate-800 font-medium text-base items-center justify-center hover:underline underline-offset-8 hover:text-blue-600'>

                Services
            </Link>
            <Link href='/' className='lg:inline-flex  lg:w-auto w-full px-5 py-2 rounded text-slate-800 font-medium text-base items-center justify-center hover:underline underline-offset-8 hover:text-blue-600'>

                About us
            </Link>
            <Link href='/' className='lg:inline-flex  lg:w-auto w-full px-5 py-2 rounded text-slate-800 font-medium text-base items-center justify-center hover:underline underline-offset-8 hover:text-blue-600'>

                Contact us
            </Link>
          </div>
          <Link href='/'className='inline-flex flex-row lg:mx-3 lg:w-auto w-full items-center py-2 px-5'>
            <p className='text-slate-800 font-semibold text-base hover:underline underline-offset-8 hover:text-blue-600'>
            Careers
            </p>
            <Image
              src="/careers_logo.png"
              alt="Yatech Logo"
              className=" mx-2"
              width={24}
              height={24}
              priority
            />
        </Link>
        </div>
      </nav>
    </>
  );
};