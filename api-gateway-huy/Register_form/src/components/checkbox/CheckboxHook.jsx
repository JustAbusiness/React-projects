import React from 'react';
import { useController } from 'react-hook-form';

const CheckboxHook = ({ control, text,  ...props }) => {
    const { field } = useController({ name: props.name, control })
    return (
        <label className="cursor-pointer custom-checkbox">
            <input type="checkbox" {...field} {...props} value={props.value}  id={props.name} className="hidden items-center" />
            <div className="flex items-center gap-x-3 mt-6">
                <div className=" rounded-md bg-blue-400 flex items-center justify-center custom-checkbox">
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="5px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-7">
                        <path className="p-5 items-center" strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <label htmlFor={props.name} className="text-sm ml-4 cursor-pointer">{text}</label>
            </div>
        </label>
    );
};

export default CheckboxHook;