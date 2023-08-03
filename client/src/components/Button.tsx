import React from 'react';

interface ButtonProps {
  text: string,
  click: () => void
}

export default function Button({text, click}: ButtonProps) {
  return (
    <button
      onClick={click}
      className='bg-secondary py-2 w-36 rounded-full font-bold cursor-pointer'>
      {text}
    </button>
  );
}
