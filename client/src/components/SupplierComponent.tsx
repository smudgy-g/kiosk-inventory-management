import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FiInfo } from 'react-icons/fi';

interface SupplierComponentProps {
  key: String;
  name: String;
  id: Number;
}

export default function SupplierComponent({
  id,
  name,
}: SupplierComponentProps) {
  return (
    <div className='grid grid-cols-3 gap-1 w-90vw items-center mt-6 p-2 rounded shadow-md'>
      <div className='col-span-1'>
        <Link to={`/products/`} state={{ id, name }}>
          <img
            src='./images/cocktail.png'
            alt='img'
            className='h-24 rounded-lg'
          />
        </Link>
      </div>
      <div className='flex flex-col justify-between h-full col-span-2'>
        <div className='text-left text-xl font-bold mb-2'>
          <Link to={`/products/`} state={{ id, name }}>
            {name}
          </Link>
        </div>
        <div className='flex justify-end gap-6'>
          <div className='bg-blue-600 p-3 rounded-xl cursor-pointer'>
            <FaTrash color='white' />
          </div>
          <div className='bg-blue-600 p-3 rounded-xl cursor-pointer'>
            <FiInfo color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
