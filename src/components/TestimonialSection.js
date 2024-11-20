import React from 'react';
import SisyphusIcon from '../images/SisyphusCompanyLogo.svg';
import Avatar from '../images/TestimonialAvatar.svg';

const TestimonialSection = () => {
  return (
    <section className='text-center py-16 px-4'>
      <div className='flex justify-center mb-6'>
        <img
          src={SisyphusIcon}
          alt='Sisyphus Company Logo'
          className='w-20 md:w-24 h-auto'
        />
      </div>

      <blockquote className='text-xl md:text-2xl font-semibold mb-4 px-2'>
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </blockquote>

      <div className='flex flex-col items-center'>
        <img
          src={Avatar}
          alt='Candice Wu'
          className='w-10 md:w-12 h-auto rounded-full mb-3'
        />
        <p className='font-semibold'>Candice Wu</p>
        <p className='text-sm text-gray-600'>Product Manager, Sisyphus</p>
      </div>
    </section>
  );
};

export default TestimonialSection;
