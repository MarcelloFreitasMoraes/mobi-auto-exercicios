'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { maskify } from '../page';


const CardFunction: React.FC = () => {
  const {
    register,
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: { value: '' }
  });

  const watchValue = watch('value');
  const charCount = watchValue.length;
  const maxChar = 20;

  return (
    <CardContent>
      <form className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Digite aqui..."
            className="mb-2 w-60"
            maxLength={maxChar}
            {...register('value')}
          />       
        </div>
        <div className="flex">
          <p className={`text-sm ${charCount === maxChar ? 'text-red-500' : 'text-gray-500'}`}>
            {charCount}/{maxChar} caracteres
          </p>
        </div>      
      </form>
      <div className="mt-4">
        <p>
          <strong>Resultado:</strong> {maskify(watchValue)}
        </p>
      </div>
    </CardContent>
  );
};

export default CardFunction;
