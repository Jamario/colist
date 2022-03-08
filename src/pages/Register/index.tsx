import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import IntroLayout from 'components/IntroLayout';
import Input from 'components/Input';

type FormData = {
    email: string;
    password: string;
    passwordConfirmation: string;
};

export default function Register(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = () => console.log('formdata');
    const validateEmail = (value: string) => {
        console.log('value', value);
        return true;
    };

    return (
        <IntroLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label='Email'
                    placeholder='Email'
                    {...register('email', { required: 'Field cannot be empty', validate: validateEmail })}
                    error={!!errors.email}
                    errorMessage={errors.email?.message || ''}
                />
                <Input
                    label='Password'
                    placeholder='Password'
                    {...register('password', { required: 'Field cannot be empty' })}
                    error={!!errors.password}
                    errorMessage={errors.password?.message || ''}
                />
                <button type='submit' className='bg-gray-100 p-2'>
                    Register
                </button>
                <Link to='/'>Login Page</Link>
            </form>
        </IntroLayout>
    );
}
