import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }

    return (
        <>
        <div className='md:border-b-4'>
        <div className='text-white  h-[100px] max-w-[1200px] flex  items-center justify-between p-2  md:p-4'>
            
            <h1 className='shadow-xl hover:scale-105  mb-8 cursor-default px-10l lg:font-extrabold font-bold lg:text-4xl md:text-3xl text-2xl md:mt-2 span-color  lg:flex-shrink-0'>A:Malik-Portfolio</h1>
           
            <div onClick={handleNav} className='fixed top-0 right-0 block md:hidden p-5 z-50'>
                {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>         
            
            <ul className='hidden md:flex  2xl:ml-23 mt-[0.2rem] 2xl:gap-10 xl:gap-5'>
                <li className='px-7 lg:text-3xl text-2xl  font-bold hover:text-gray-600 '><a href="#home">Home</a></li>
                <li className="px-5 lg:text-3xl text-2xl font-bold hover:text-gray-600"><a href="#about">About</a></li>
                <li className='px-5 lg:text-3xl text-2xl font-bold hover:text-gray-600'><a href="#work">Work</a></li>
                <li className='px-5 lg:text-3xl text-2xl font-bold hover:text-gray-600'><a href="#contact">Contact</a></li>
            </ul>
        
            </div>
  

           
            <div className={nav ? 'fixed z-50 left-0 top-0 w-[66%] h-full   bg-white text-black ease-in-out duration-1000' : 'fixed left-[-100%] top-0 w-[60%] h-full bg-gray-900 text-white ease-in-out duration-1000'}>
                <ul className='flex flex-col p-4 gap-14 transition-opacity'>
                <h1 className='shadow-xl cursor-default px-10l lg:font-extrabold font-bold  text-3xl mt-2 span-color  lg:flex-shrink-0'>A:Malik-Portfolio</h1>
                    <li className='text-2xl'><a href="#home" onClick={handleNav}>Home</a></li>
                    <li className='text-2xl'><a href="#about" onClick={handleNav}>About</a></li>
                    <li className='text-2xl'><a href="#work" onClick={handleNav}>Work</a></li>
                    <li className='text-2xl'><a href="#contact" onClick={handleNav}>Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar
