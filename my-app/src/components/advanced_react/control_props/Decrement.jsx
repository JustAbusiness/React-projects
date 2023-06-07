import React from 'react';
import { useCount } from './count-context';

const Decrement = () => {
    const { handleDecrement } = useCount();

    return (
        <button onClick={handleDecrement} className="decrement p-4 flex items-center justify-center bg-slate-300 text-lg cursor-pointer"> - </button>

    );
};

export default Decrement;