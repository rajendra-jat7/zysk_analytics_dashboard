import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import Content from '../images/Content.svg';
import ArrowIcon from '../images/arrow-right.svg';

const WelcomeSection = () => {
  return (
    <div className='text-center my-16 px-4'>
      <div className='flex justify-center text-[#7F56D9] font-medium pb-4'>
        <p className='border border-purple-200 p-1 w-fit flex items-center rounded-3xl bg-purple-50 pr-2'>
          <button className='border border-purple-200 bg-white rounded-2xl pl-1 pr-1 mr-3'>
            New feature
          </button>
          Check out the team dashboard
          <img src={ArrowIcon} className='pl-2' alt='Arrow Icon' />
        </p>
      </div>
      <h1 className='text-3xl md:text-4xl font-bold mb-4'>
        Beautiful analytics to grow smarter
      </h1>
      <p className='text-gray-600 mb-6 text-sm md:text-base'>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
        <button className='button-23 flex gap-2 items-center justify-center px-4 py-2'>
          <FaRegPlayCircle /> Demo
        </button>
        <button className='text-white bg-[#7F56D9] py-2 px-6 rounded-lg'>
          Sign Up
        </button>
      </div>
      <div className='max-w-7xl sm:w-lg mx-auto flex justify-center pt-6 rounded-lg'>
        <img src={Content} alt='Analytics Dashboard' />
      </div>
    </div>
  );
};

export default WelcomeSection;
