import React from 'react';
import profilePic from '../assets/profilePic.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-lime-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rizwan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have  always  had an interest in technology development which consequently 
                  has led me to pursue a career as a Full-Stack Developer. I am keen to explore 
                  how websites work and the intricate details of creating interactive 
                  and immersive web pages.</p>  
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4'>
            <div
            style={{ backgroundImage: `url(${profilePic})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 hover:scale-110 duration-500'>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;