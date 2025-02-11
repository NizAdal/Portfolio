import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className='w-full inset-x-0 bottom-0'>
      <div className= "">
        <section className='md:px-28 md:pb-0'>
          <div className='flex flex-col items-center'>
            <div className='flex justify-center md:space-x-8'>
            <a href="https://github.com/NizAdal" target="_blank" class="p-4 text-white rounded-lg hover:bg-gray-400 transition-colors duration-300">
                <i class="text-3xl text-white opacity-90 fa-brands fa-github"></i>
             </a>

              <a href="https://www.linkedin.com/in/abdul-malik-b8393a178/" target="_blank" className="p-4 text-white rounded-lg hover:bg-gray-400 transition-colors duration-300">
                <i className="text-3xl text-white opacity-90 fab fa-linkedin"></i>
              </a>
              <a href="https://www.upwork.com/freelancers/~01de99d443620a113e" target="_blank" className="p-4 text-white rounded-lg hover:bg-gray-400 transition-colors duration-300">
                <i className="text-3xl text-white opacity-90 fab fa-upwork"></i>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nizamaniabdulmalik321@gmail.com" target="_blank" class="p-4 text-white rounded-lg hover:bg-gray-400 transition-colors duration-300">
                <i class="text-3xl text-white opacity-90 fa-regular fa-envelope"></i>
              </a>


            </div>
            <h2 className="md:text-xl text-lg font-bold text-center text-white">
              Copyright &copy; 2025 to A:Malik
            </h2>
          </div>
        </section>      
      </div>
    </div>
  );
}

export default Footer;
