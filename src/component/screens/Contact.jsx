import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [data, setData] = useState('')
  const we = "https://getform.io/f/anllvkra"
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" ||  name === "" ){
      toast.error('Please fill all fields correctly');
      setData("")
    }else {
      setData(we)
      toast.success('Form submitted successfully!');
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Z][a-z\s'-]+$/;
    return nameRegex.test(name);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!validateName(e.target.value)) {
      setNameError('First letter of name must be uppercase and other letters lowercase');
    } else {
      setNameError('');
    }
  };

  return (
    <div className='max-w-[1200px] 2xl:mx-[9.6rem] lg:mx-[2rem] m-5 sm:py-10' id='contact'>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl font-bold leading-tight span-color'>Contact Me</h2>
        <div className='max-w-[800px]'>
          <div className='mt-6 rounded-xl'>
            <div className='p-10'>
              <form action={data} method='POST' onSubmit={handleSubmit}>
                <div className='grid grid-col-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                  <div className='mt-2.5 relative'>
                    <input
                      type="text"
                      name="name"
                      placeholder='Your Name'
                      className='bg-white w-full px-4 py-4 text-black placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600'
                      value={name}
                      onChange={handleNameChange}
                    />
                    {nameError && <p className='text-red-600'>{nameError}</p>}
                  </div>
                  <div className='mt-2.5 relative'>
                    <input
                      type="email"
                      name="email"
                      placeholder='Your Email'
                      className='bg-white w-full px-4 py-4 text-black placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600'
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && <p className='text-red-600'>{emailError}</p>}
                  </div>
                  <div className='mt-2.5 relative'>
                    <textarea
                      name="message"
                      placeholder='Your Message'
                      className='bg-white w-full px-4 py-4 text-black placeholder-gray-400 border border-gray-700 rounded-md focus:border-pink-600'
                      rows="4"
                    />
                  </div>
                  <div className='mt-2.5 relative'>
                    <DotLottieReact
                      src="https://lottie.host/7a01fd9c-6c07-45e9-ab45-def72eb4b9bb/Da2ZJrmqQO.lottie"
                      loop
                      autoplay
                    />
                  </div>
                  <div className='sm:col-span-2'>
                    <button  type='submit' className='cursor-pointer text-xl w-full p-4 mt-2 font-semibold text-white bg-span-color rounded-md'>
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
