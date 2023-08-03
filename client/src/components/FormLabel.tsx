import React from 'react';

interface LabelProps {
  label: string;
}
export default function FormLabel({ label }: LabelProps) {
  return <label className='text-lg mb-2 mt-16 font-bold'>{label}</label>;
}
