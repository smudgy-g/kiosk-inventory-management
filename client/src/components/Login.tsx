import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    console.log();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name='email'
          value={email}
          placeholder='Enter you email address'
          // onChange={setEmail((e) => e.target.value)}
        />

        <label>Password</label>
        <input
          name='password'
          value={password}
          // onChange={setPassword((e) => e.target.value)}
        />

        <button className='login-btn'>Login</button>
      </form>
    </>
  );
}
