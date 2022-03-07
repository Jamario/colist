import * as React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
//UseFormRegisterReturn
interface InputProps extends UseFormRegisterReturn {
    label: string;
    placeholder: string;
    className?: string;
}

export default function Input(props: InputProps): JSX.Element {
    const { label, placeholder, className = '', ...rest } = props;
    const { name } = rest;
    const id = `input-${name}`;
    return (
        <div className={`mb-2 ${className}`}>
            <label className='block capitalize' htmlFor={id}>
                {label}
            </label>
            <input placeholder={placeholder} id={id} {...rest} />
        </div>
    );
}
