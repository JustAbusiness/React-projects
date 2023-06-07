import React from 'react';
import { useCount } from './count-context';

const Count = () => {
    const { count } = useCount();
    return (
        <>
            <span className="flex-1 flex items-center justify-center text-3xl bg-blue-300 "> {count} </span>
        </>
    );
};

export default Count;