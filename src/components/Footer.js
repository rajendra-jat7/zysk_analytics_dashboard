import React from 'react';
import UntitledIcon from '../images/Logomark.svg';

const Footer = () => {
  return (
    <footer className='bg-white border-t border-gray-200 py-8'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Footer Links */}
        <div className='grid grid-cols-2 md:grid-cols-6 gap-6 mb-8'>
          {/* Column 1 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Product</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>Overview</li>
              <li className='text-gray-500'>Features</li>
              <li className='text-gray-500'>
                <span className='flex items-center'>
                  Solutions
                  <span className='ml-2 bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full'>
                    New
                  </span>
                </span>
              </li>
              <li className='text-gray-500'>Tutorials</li>
              <li className='text-gray-500'>Pricing</li>
              <li className='text-gray-500'>Releases</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>About us</li>
              <li className='text-gray-500'>Careers</li>
              <li className='text-gray-500'>Press</li>
              <li className='text-gray-500'>News</li>
              <li className='text-gray-500'>Media kit</li>
              <li className='text-gray-500'>Contact</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>Blog</li>
              <li className='text-gray-500'>Newsletter</li>
              <li className='text-gray-500'>Events</li>
              <li className='text-gray-500'>Help centre</li>
              <li className='text-gray-500'>Tutorials</li>
              <li className='text-gray-500'>Support</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Use cases</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>Startups</li>
              <li className='text-gray-500'>Enterprise</li>
              <li className='text-gray-500'>Government</li>
              <li className='text-gray-500'>SaaS centre</li>
              <li className='text-gray-500'>Marketplaces</li>
              <li className='text-gray-500'>Ecommerce</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Social</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>Twitter</li>
              <li className='text-gray-500'>LinkedIn</li>
              <li className='text-gray-500'>Facebook</li>
              <li className='text-gray-500'>GitHub</li>
              <li className='text-gray-500'>AngelList</li>
              <li className='text-gray-500'>Dribbble</li>
            </ul>
          </div>
          {/* Column 6 */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li className='text-gray-500'>Terms</li>
              <li className='text-gray-500'>Privacy</li>
              <li className='text-gray-500'>Cookies</li>
              <li className='text-gray-500'>Licenses</li>
              <li className='text-gray-500'>Settings</li>
              <li className='text-gray-500'>Contact</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src={UntitledIcon}
              alt='Untitled UI Logo'
              className='w-8 h-8 mr-2'
            />
            <span className='text-gray-900 font-semibold'>Untitled UI</span>
          </div>
          <p className='text-gray-500 text-sm'>
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
