import React, { useContext, useState } from 'react';
import { ClientContext } from '../App';
import { ClientContextType } from '../app/interfaces';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(0);

  const clientContext = useContext<ClientContextType | undefined>(
    ClientContext
  );

  async function handleSubmit(e: any) {
    e.preventDefault();
    await setId(4);
    setEmail('');
    setPassword('');
    await clientContext?.setClientId(id);
    console.log(clientContext, email, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name='email'
          value={email}
          placeholder='Enter you email address'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type='submit' className=''>
          Login
        </button>
      </form>
    </>
  );
}
