import React from 'react'
import { motion } from 'framer-motion';

function Work() {
  return (
    <div>
        <div className='max-w-[1200px] xl:mx-auto lg:mx-6 md:m-7 m-5  mt-20 ' id='work'>
         <motion.div 
      initial={{ opacity: 0, y: 50}}
      whileInView={{ opacity:1, y: 0}}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1}} 
      >    
            <div className='pb-8'>
                <p className='text-4xl mb-3   font-bold span-color'>Work</p>
                <p className='text-gray-800'>Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                mx-auto content-div h-[200px] bg-cover relative'>
                    <img src="./Nizam.JPG" alt="NEW image" className="w-full h-full object-cover" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70
                absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider ml-7'>Nizam Eduction Welfare(NEW) <br/> In React </span>
                    <a href="https://nizam-education-welfare.vercel.app/" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2
                         text-gray-700 font-bold text-lg bg-white cursor-pointer'>
                            Go to Check
                        </button>
                    </a>
                </div>    
                </div>
             
                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                mx-auto content-div h-[200px] bg-cover relative'>
                    <img src="" alt="" layout="fill" objectFit="cover" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70
                absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider ml-7'>Nizam Eduction Welfare(NEW) <br/>In Django</span>
                    <a href="" target='_blank'>
                        <button className='text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg cursor-pointer'>
                            Live
                        </button>
                    </a>
                </div>    
                </div>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Work
