import React, { useContext, useState } from 'react';
import { ClientContext } from '../App';
import { ClientContextType } from '../app/interfaces';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const clientContext = useContext<ClientContextType | undefined>(
    ClientContext
  );

  async function handleSubmit(e: any) {
    e.preventDefault();
    await setId(4);
    setEmail('');
    setPassword('');
    await clientContext?.setClientId(id);
    // console.log(clientContext, email, password);
    navigate('/client');
  }

  return (
    <>
      <header className='text-left py-5 px-7 mb-2'>
        <div className='flex flex-col items-center mb-4 gap-3'>
          <img src='/images/orange.png' alt='orange logo' className='h-16' />
          <h1 className='text-5xl font-bold'>kiosk</h1>
        </div>
      </header>
      <main className='text-left'>
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col px-7'>
          <label className='text-lg mb-2 mt-16'>Email</label>
          <input
            name='email'
            type='email'
            value={email}
            placeholder='Enter you email address'
            required
            onChange={(e) => setEmail(e.target.value)}
            className='border border-solid border-slate-100 p-2 rounded-md'
          />

          <label className='text-lg mb-2 mt-16'>Password</label>
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
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-10'>
            Login
          </button>
        </form>
      </main>
    </>
  );
}
