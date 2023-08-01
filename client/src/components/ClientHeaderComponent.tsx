import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoComponent from './Logo';
import { FiLogOut } from 'react-icons/fi';

export default function ClientHeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className='fixed top-0 right-0 left-0 flex justify-between py-5 px-7 mb-2'>
      <LogoComponent />
      <button
        onClick={() => navigate('/')}
        className='bg-accent py-2 px-4 rounded-full text-dark cursor-pointer'>
        <FiLogOut />
      </button>
    </header>
  );
}
