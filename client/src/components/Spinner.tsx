import { FaSpinner } from 'react-icons/fa';

export default function Spinner() {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <div className=' animate-spin'>
        <FaSpinner size={'6rem'} color='blue' style={{ opacity: '0.9' }} />
      </div>
    </div>
  );
}
