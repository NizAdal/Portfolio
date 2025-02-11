import React from 'react'
import { motion } from 'framer-motion';
function Skill() {
  return (
    <motion.div 
    animate={{ y: [0, -20, 0] }} 
    transition={{ duration: 1, repeat: Infinity }} >
    <div className='bg-white xl:mx-auto lg:mx-6 md:m-7 m-5  md:h-[150px] max-w-[1200px]  grid grid-cols-3
    place-items-center md:flex md:justify-between md:items-center'>
     <h2 className='span-color text-2xl md:text-4xl font-bold m-4'>I <br/> Code</h2>
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./tailwind.png" alt="tailwind" />
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./boostrap.webp" alt="bootstrap" />
      </div>      
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./javascript.png" alt="javaimage" />
      </div>   
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./react.png" alt="react"/>
      </div>   
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./python.png" alt="python" />
      </div>   
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./django-icon.svg" alt="django" />
      </div>   
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./flask-logo-icon.webp" alt="flask" />
      </div>   
     <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
      <img src="./matlab.jpeg" alt="matlab" />
      </div>   
    </div>
      </motion.div>      
  )
}

export default Skill
