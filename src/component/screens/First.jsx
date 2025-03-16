import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
function First() {
  useEffect(() => {
    const element = document.getElementById('flip-image');
    const flip = setInterval(() => {
     element.classList.toggle('flipped'); 
    },5000);
    return () => clearInterval(flip)
  },[])
  
  return (
      <motion.div 
      initial={{ opacity: 0, y: -50}}
      whileInView={{ opacity:1, y: 0}}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1}}      
      >
    <div className='flex flex-row ml-3  lg:mt-3 mt-5  md:mt-16  justify-between items-center  xl:gap-8 xl:max-w-[1200px] lg:h-[70vh] lg:w-[75rem] mx-2  lg:mx-36 md:mx-20 2xl:mx-80 '>
      <div className='my-auto'>
        <h1 className='text-white text-gradient-to-br from-amber-950 to-purple-500 text-2xl sm:text-5xl lg:text-8xl font-extrabold'>
        <span className='span-color'>
          I'm 
        </span> <br/>
        <span className='inline-block w-[200px] text-xl  md:w-[400px] lg:text-5xl md:text-2xl'>
        <TypeAnimation 
        sequence={[
          "React Dev",
          1000,
          "Django (DRF) Dev",
          1000,
          "Flask Dev",
          1000,
          "Mathematician",
          1000,
          "Matlab User",
          1000,
        ]}
        wrapper='span'
        speed={50}
        repeat={Infinity}
        />
        </span>
        </h1>
        <p className='text-white leading-relaxed antialiased  sm:text-lg my-6 lg:text-xl w-[200px]  md:w-[400px]'>
          I am  A:Malik, having 2+ years experience in web development
        </p>
        <div className='my-8 flex flex-row'>
          <a href="/Malik Resume.pdf" target='_blank' className='px-6 py-3 md:w-full  rounded-xl mr-4
          bg-gradient-to-br from-amber-950 to-purple-500 text-center  text-white'>
            Download CV
          </a>
          <a href="#contact" className='px-6 py-3 w-full hidden md:block text-center  rounded-xl mr-4
          border border-gray-400 text-white hover:bg-gradient-to-br from-amber-950 to-purple-500'>Contact</a>
        </div>
      </div> 
      <div className='xl:my-auto h-68  w-[500px]  lg:mx-50 xl:mx-auto lg:h-auto md:w-[400px] lg:w-[400px] xl:w-[500px]'>
        <img id='flip-image'  src="./adal.jpg" alt="A:Malik Img" className='rounded-full  cursor-none' />
      </div>
    </div>
      </motion.div>
  )
}

export default First
