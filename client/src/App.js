import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleSubmit () {
    console.log()
  }

  return (
    <div className='App'>
      <header>pineapplelogo kiosk</header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            value={email}
            placeholder='Enter you email address'
            onChange={setEmail((e) => e.target.value)}></input>
        
          <label>Password</label>
          <input
            value={password}
            onChange={setPassword((e) => e.target.value)}></input>

          <button className="login-btn">Login</button>
        </form>
      </main>
    </div>
  );
}

export default App;
