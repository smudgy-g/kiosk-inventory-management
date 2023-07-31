import { FaSpinner } from 'react-icons/fa';
import React from 'react';

export default function Spinner() {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className=' animate-spin'>
        <FaSpinner size={'6rem'} color='#02E875' style={{ opacity: '0.9' }} />
      </div>
    </div>
  );
}
