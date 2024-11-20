import React from 'react';
import Boltshift from '../images/BoltShiftLogo.svg';
import Lightbox from '../images/LightboxLogo.svg';
import FeatherDev from '../images/FeatherDevLogo.svg';
import Spherule from '../images/SpheruleLogo.svg';
import GlobalBank from '../images/GlobalBankLogo.svg';
import Nietzsche from '../images/NietzscheLogo.svg';

function CompaniesSection() {
  return (
    <div className='flex flex-col items-center space-y-6 py-8 px-4'>
      <p className='text-center text-[#475467] text-sm md:text-base'>
        Join 4,000+ companies already growing
      </p>
      <div className='flex justify-center items-center flex-wrap gap-8 md:gap-14'>
        <img src={Boltshift} alt='Boltshift' className='w-24 md:w-40 h-auto' />
        <img src={Lightbox} alt='Lightbox' className='w-24 md:w-40 h-auto' />
        <img src={FeatherDev} alt='FeatherDev' className='w-24 md:w-40 h-auto' />
        <img src={Spherule} alt='Spherule' className='w-24 md:w-40 h-auto' />
        <img src={GlobalBank} alt='GlobalBank' className='w-24 md:w-40 h-auto' />
        <img src={Nietzsche} alt='Nietzsche' className='w-24 md:w-40 h-auto' />
      </div>
    </div>
  );
}

export default CompaniesSection;
