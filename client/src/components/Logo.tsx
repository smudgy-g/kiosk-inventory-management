import React from 'react';
import { GiPineapple } from 'react-icons/gi';
export default function LogoComponent() {
  return (
    <div className='flex gap-2 items-center'>   
      <GiPineapple size={'40px'} />
      <h1 className='text-5xl font-bold font-DMSerif'>
        k<span className='italic'>i</span>osk
      </h1>
    </div>
  );
}
