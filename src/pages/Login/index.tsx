import * as React from 'react';
import { useForm } from 'react-hook-form';

import Input from 'components/Input';

type FormData = {
    email: string;
    password: string;
};

export default function Login(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    console.log('errors', errors);
    const onSubmit = () => console.log('formdata');
    return (
        <div className='flex border border-black'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label='Email' placeholder='Email' {...register('email')} />
                <Input label='Password' placeholder='Password' {...register('password')} />
            </form>
        </div>
    );
}
