import React from 'react';
import { useCount } from './count-context';

const Increment = () => {
    const { handleIncrement } = useCount();

    return (
        <>
            <button onClick={handleIncrement} className="increment p-4 flex items-center justify-center bg-slate-300 text-lg cursor-pointer "> + </button>
        </>
    );
};

export default Increment;