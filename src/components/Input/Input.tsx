import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
//UseFormRegisterReturn
interface InputProps extends UseFormRegisterReturn {
    label: string;
    placeholder: string;
    error: boolean;
    errorMessage: string;
    className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
    const { label, placeholder, className = '', error, errorMessage, ...rest } = props;

    const { name } = rest;
    const id = `input-${name}`;
    return (
        <div className={`mb-2 ${className}`}>
            <label className='block capitalize' htmlFor={id}>
                {label}
            </label>
            <input placeholder={placeholder} id={id} {...rest} ref={ref} className='border border-solid border-black' />
            {error && <div className='text-red-500 text-sm'>{errorMessage}</div>}
        </div>
    );
});

export default Input;
