import React from 'react';

interface DeleteModalProps {
  onDelete: () => void;
}

export default function DeleteModal({ onDelete }: DeleteModalProps) {
  // const [isOpen, setIsOpen] = useState(false);

  function handleDelete() {
    onDelete();
  }

  return (
    <div>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-40'>
        <div className='absolute top-1/4 max-h-fit inset-0 z-50 p-5 bg-white rounded-md shadow-2xl'>
          <p className='font-bold text-lg'>
            Are you sure you want to delete this?
          </p>
          <div className='flex justify-around mt-3'>
            <button className='bg-red-800 py-2 px-6 rounded-md text-white cursor-pointer'>
              Cancel
            </button>
            <button
              className='bg-black py-2 px-10 rounded-md text-white cursor-pointer'
              onClick={handleDelete}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
