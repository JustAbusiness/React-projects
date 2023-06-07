import React from 'react';
import { useController } from 'react-hook-form';

const RadioHook = ({control, ...props }) => {
    const { field } = useController({ name:props.name, control})
    return (
        <label className="cursor-pointer custom-radio">
            <input type="radio" {...field} {...props} className="hidden" defaultChecked={props.defaultChecked} />
            <div className="bg-white w-full h-full rounded-full"></div>
        </label>
    );
};

export default RadioHook;   