import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#071c05] to-[#6b8869]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#dbb434]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rizwan Ashraf
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specialising in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dbb434] hover:border-[#dbb434]'>
          <Link to='work' smooth={true} duration={500}>View Work </Link>
            {/* rotate arrow on hover */}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;