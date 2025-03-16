import React from 'react'
import { motion } from 'framer-motion';
function About() {
  return (
    <div className='text-white max-w-[1200px] mx-auto ' id="about">
      <motion.div 
      initial={{ opacity: 0, x: -50}}
      whileInView={{ opacity:1, x: 0}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1}} 
      >
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <img className='mx-auto rounded-3xl py-8 md:py-0 md:w-96 w-85'  src="./about.webp" alt="" />
            <div className='mt-0  w-full  text-left flex flex-col h-full justify-items-start py-6 md:py-0'>
                <div className='my-auto mx-6 '>
                    <h2 className='text-4xl font-bold mb-4 span-color'>About Me</h2>
                    <p className='text-base lg:text-lg leading-relaxed antialiased'>
                    Abdul Malik, a React.js and Django + Rest Framework (DRF) developer with 2 years of experience,
                    <br/>
                    has a good understanding of HTML, CSS, Tailwind CSS, Bootstrap, Python  & JavaScript.
                    <br/>  
                    Studying BS Mathematics also have good experience of using Matlab.
                    <br/>
                    Co-founder and Director of Media: Nizam Education Welfare (NEW) 
                    <br/>
                    As a mathematician, I have a passion for solving queries and task-handling.
                    </p>
                </div>
            </div>
            
            
        </div>
        </motion.div>      
    </div>
  )
}

export default About
