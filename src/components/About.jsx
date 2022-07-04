import React from 'react';
import profilePic from '../assets/profilePic.png';
import education from '../assets/education.png';
import goals from '../assets/goals.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-[#071c05] to-[#6b8869] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
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
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div
            style={{ backgroundImage: `url(${profilePic})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <div
            style={{ backgroundImage: `url(${education})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <div
            style={{ backgroundImage: `url(${goals})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div className='sm:text-center'>
              <p>I am graduate of the University of Birmingham Coding bootcamp and I am now seeking employment as a Software Developer .</p>
            </div>
            <div className='sm:text-center'>
              <p>University of Birmingham <br /> Coding Bootcamp Graduate 21-22 <br /> Grade Obtained A+
                <br />
                <br />
                Coventry University <br /> B.A. (Hons) Business Management<br /> 2:1 Obtained
              </p>
            </div>
            <div className='sm:text-center'>
              <p>I am actively seeking and keen to start a new and exciting role within the IT industry</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;