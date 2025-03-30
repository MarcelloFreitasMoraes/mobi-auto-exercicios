'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';
import { useForm } from 'react-hook-form';

const ExerciseFour: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<{ word: string }>();
    const [result, setResult] = React.useState<string | null>(null);

    const checkIfTheFirstLetterIsUppercase = (word: string): boolean => {
        const words = word.split(' ');
        return words.every((w) => /^[A-Z]/.test(w[0]));
    };

    const onSubmit = (data: { word: string; }) => {
        const inputValue = data.word;
        if (checkIfTheFirstLetterIsUppercase(inputValue)) {
            setResult('Verdadeiro');
        } else {
            setResult('Falso');
        }
    };

    return (
        <Card className='w-60 p-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <Input
                    {...register("word", { required: "Este campo é obrigatório" })}
                    placeholder="Digite uma palavra"
                />
                <div className='h-2 my-2'> {errors.word && <p>{errors.word.message}</p>}</div>           
                <Button type="submit" className='cursor-pointer'>Verificar</Button>
            </form>
            <div className='mt-2'>
                {result !== null && <p >Resultado: <span className={cn(
                    result === 'Verdadeiro' ? 'text-green-700' : 'text-red-700'
                )}>{result}</span></p>}
            </div>
        </Card>
    );
};

export default ExerciseFour;
