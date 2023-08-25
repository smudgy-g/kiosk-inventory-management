import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoComponent from './Logo';
import { FiLogOut } from 'react-icons/fi';

export default function ClientHeaderComponent() {
  const navigate = useNavigate();

  return (
    <div className=' flex justify-between'>
      <LogoComponent />
      <button
        onClick={() => navigate('/')}
        className='bg-accent py-2 px-4 rounded-full text-dark cursor-pointer'>
        <FiLogOut />
      </button>
    </div>
  );
}
