import React from 'react';

const TrialSection = () => {
  return (
    <div className='bg-[#F9FAFB] py-12 px-6'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-3xl font-bold'>Start your free trial</h2>
        <p className='text-gray-600 mt-4'>
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className='mt-6 flex justify-center space-x-4'>
          <button className='bg-white px-6 py-2 rounded-md border border-[#D0D5DD]'>
            Learn more
          </button>
          <button className='bg-[#7F56D9] text-white px-6 py-2 rounded-md'>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialSection;
