import React from 'react';
import { useController } from 'react-hook-form';

const InputHook = ({ control, ...props }) => {
    const { field } = useController({ name: props.name, defaultValue: '', control });
    return (
        <input className="rounded-lg p-5 border border-gray-200 transition-all focus:border-blue-500 shadow-lg outline-none" {...field} {...props} />

    );
};

export default InputHook;