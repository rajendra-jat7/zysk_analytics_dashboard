import React from 'react';
import Message from '../images/MessageIcon.svg';
import Zap from '../images/ZapIcon.svg';
import ChartBreakout from '../images/ChartBreakoutIcon.svg';
import Smile from '../images/SmileMessageIcon.svg';
import Command from '../images/CommandIcon.svg';
import Heart from '../images/HeartMessageIcon.svg';

function FeatureSection() {
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
    {
      img: Smile,
      title: 'Connect with customers',
      description:
        'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
      img: Command,
      title: 'Connect the tools you already use',
      description:
        'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      img: Heart,
      title: 'Our people make the difference',
      description:
        'We’re an extension of your customer service team, and all our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ];

  return (
    <div className='px-4 md:px-6 py-12'>
      <p className='text-[#6941C6] text-center font-semibold mb-2'>Features</p>
      <h1 className='text-2xl md:text-3xl text-center font-bold mb-4'>
        Analytics that feels like it’s from the future
      </h1>
      <p className='text-gray-600 text-center text-sm md:text-base max-w-xl mx-auto mb-8'>
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white p-4 md:p-6 rounded-lg shadow-lg'
          >
            <img
              src={feature.img}
              alt={feature.title}
              className='w-12 md:w-16 h-auto mb-4'
            />
            <h3 className='text-md md:text-lg font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-600 text-sm md:text-base text-center'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
