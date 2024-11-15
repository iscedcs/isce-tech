import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import React from 'react'

interface FormErrorProps {
    message?:  string;
};

export default function FormError({
    message,
}: FormErrorProps) {
    if(!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-full flex justify-center mx-auto items-center gap-x-2 text-sm text-destructive ">
        <ExclamationTriangleIcon className='h-4 w-4'/>
        <p>{message}</p>
    </div>
  
  )
}
