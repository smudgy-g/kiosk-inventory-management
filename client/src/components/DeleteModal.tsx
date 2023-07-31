import React from 'react';

interface DeleteModalProps {
  setIsOpen: (x: boolean) => void;
  handleDelete: () => void;
}
// onDelete={() => handleDelete(supplier.id)}
// { onDelete }: DeleteModalProps
export default function DeleteModal({
  setIsOpen,
  handleDelete,
}: DeleteModalProps) {
  return (
    <div>
      <div className='fixed inset-0 flex items-center justify-center bg-background bg-opacity-80 z-40'>
        <div className='absolute top-1/4 max-h-fit inset-0 z-50 p-5 bg-background rounded-md shadow-2xl shadow-stone-300'>
          <p className='font-bold text-lg'>
            Are you sure you want to delete this?
          </p>
          <div className='flex justify-around mt-3'>
            <button
              className='bg-primary py-2 px-6 rounded-md text-dark cursor-pointer'
              onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button
              className='bg-secondary py-2 px-10 rounded-md text-white cursor-pointer'
              onClick={() => {
                setIsOpen(false);
                handleDelete();
              }}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
