import React from 'react';
import Screen from '../images/Screen.svg';
import iPhone from '../images/iPhoneScreen.svg';
import Message from '../images/MessageIcon.svg';
import Zap from '../images/ZapIcon.svg';
import ChartBreakout from '../images/ChartBreakoutIcon.svg';
import ArrowIcon from '../images/arrow-right.svg';
import '../components/ExtraFeature.css';

function ExtraFeature() {
  const features = [
    {
      img: Message,
      title: 'Share team inboxes',
      description:
        'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
      img: Zap,
      title: 'Deliver instant answers',
      description:
        'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      img: ChartBreakout,
      title: 'Manage your team with reports',
      description:
        'Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.',
    },
  ];

  return (
    <div>
      <div className='px-6 py-12'>
        <p className='text-[#6941C6] text-center font-semibold mb-2'>
          Features
        </p>
        <h1 className='text-3xl text-center font-bold mb-4'>
          Cutting-edge features for advanced analytics
        </h1>
        <p className='text-gray-600 text-center max-w-2xl mx-auto mb-8'>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className='image-container'>
        <img src={Screen} alt='Screen View' className='screen-image' />
        <img src={iPhone} alt='iPhone View' className='iphone-image' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white p-6 rounded-lg shadow-lg'
          >
            <img
              src={feature.img}
              alt={feature.title}
              className='w-16 h-16 mb-4'
            />
            <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-600 text-center'>{feature.description}</p>
            <button className='text-[#6941C6] font-semibold flex items-center mt-4'>
              Learn more{' '}
              <img src={ArrowIcon} alt='Arrow Icon' className='ml-2' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExtraFeature;
