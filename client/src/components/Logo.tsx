import React from 'react';
import { GiPineapple } from 'react-icons/gi';
export default function LogoComponent() {
  return (
    <div className='flex gap-2 items-center'>   
      <GiPineapple size={'40px'} color={'#E58806'} />
      <h1 className='text-5xl font-bold font-DMSerif text-accent'>k<span className='italic'>i</span>osk</h1>
    </div>
  );
}
