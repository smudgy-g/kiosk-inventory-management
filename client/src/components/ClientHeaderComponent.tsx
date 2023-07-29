
import { useNavigate } from 'react-router-dom';

export default function ClientHeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className='fixed top-0 right-0 left-0 flex justify-between py-5 px-7 mb-2 bg-white shadow-md'>
      <div className='flex gap-2 items-center'>
        <img src='/images/orange.png' alt='orange logo' className='h-10' />
        <h1 className='text-2xl font-bold'>kiosk</h1>
      </div>
      <button
        onClick={() => navigate('/')}
        className='bg-black py-2 px-6 rounded-full text-white cursor-pointer'>
        Logout
      </button>
    </header>
  );
}
