import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoComponent from './Logo';

export default function ClientHeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className='fixed top-0 right-0 left-0 flex justify-between py-5 px-7 mb-2'>
      <LogoComponent />
      <button
        onClick={() => navigate('/')}
        className='bg-accent py-2 px-6 rounded-full text-dark cursor-pointer'>
        Logout
      </button>
    </header>
  );
}
