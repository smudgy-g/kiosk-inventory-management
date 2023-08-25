import React, { FormEvent, useState } from 'react';
import { useClient } from '../contexts/ClientProvider';
import { useNavigate } from 'react-router-dom';
import { ClientContextType } from '../interfaces';
import { GiPineapple } from 'react-icons/gi';
import FormLabel from './FormLabel';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { updateClientId } = useClient() as ClientContextType;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setEmail('');
    setPassword('');
    updateClientId(1);
    navigate(`/client`);
  }

  return (
    <>
      <header className='text-left py-5 px-7 mb-2'>
        <div className='flex flex-col items-center mb-4 gap-1'>
          <GiPineapple size={'80px'} color={'#E58806'} />
          <h1 className='text-5xl font-bold font-DMSerif text-accent'>
            k<span className='italic'>i</span>osk
          </h1>
        </div>
      </header>
      <main className='text-left'>
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col px-7'>
          <FormLabel label={'Email:'} />
          <input
            name='email'
            type='email'
            value={email}
            placeholder='Enter you email address'
            required
            onChange={(e) => setEmail(e.target.value)}
            className='border border-solid border-slate-100 p-2 rounded-md'
          />

          <FormLabel label={'Password:'} />
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border border-solid border-slate-100 p-2 rounded-md'
          />
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 text-lg font-bold rounded-full text-dark bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus: mt-10'>
            Login
          </button>
        </form>
      </main>
    </>
  );
}
