import React, { useState } from 'react';
import AvatarCenter from '../images/AvatarCenter.svg';
import AvatarLeft from '../images/AvatarLeft.svg';
import AvatarRight from '../images/AvatarRight.svg';

function FAQSection() {
  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can change your plan at any time from the dashboard.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can cancel your plan anytime without any hidden charges.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, additional information can be added to your invoices.',
    },
    {
      question: 'How does billing work?',
      answer:
        'We offer monthly and annual billing. You will be charged based on your chosen plan.',
    },
    {
      question: 'How do I change my account email?',
      answer:
        'You can change your account email in the account settings section.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className='max-w-4xl mx-auto py-16 px-6'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold mb-2'>Frequently asked questions</h1>
        <p className='text-gray-600'>
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-gray-200 pb-4'>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => toggleFAQ(index)}
            >
              <div className='font-medium'>{faq.question}</div>
              <button className='text-gray-400 text-2xl'>
                {openIndex === index ? '−' : '+'}
              </button>
            </div>
            {openIndex === index && (
              <p className='text-gray-600 mt-2'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className='bg-gray-50 mt-12 p-8 rounded-lg flex flex-col items-center'>
        <div className='flex -space-x-4 mb-4'>
          <img
            src={AvatarLeft}
            alt='Left Avatar'
            className='w-10 h-10 rounded-full border border-white'
          />
          <img
            src={AvatarCenter}
            alt='Center Avatar'
            className='w-10 h-10 rounded-full border border-white relative z-10 transform translate-y-[-4px]'
          />
          <img
            src={AvatarRight}
            alt='Right Avatar'
            className='w-10 h-10 rounded-full border border-white'
          />
        </div>
        <h2 className='text-xl font-semibold mb-2'>Still have questions?</h2>
        <p className='text-gray-600 text-center max-w-md mb-4'>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className='bg-[#6941C6] text-white px-6 py-2 rounded-md'>
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default FAQSection;
