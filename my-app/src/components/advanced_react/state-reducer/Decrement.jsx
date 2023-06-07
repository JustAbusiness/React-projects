import React from 'react';
import useCounter from './useCounter';

const Decrement = ({onClick, ...props}) => {

    return (
        <button onClick={onClick} {...props} className="decrement p-4 flex items-center justify-center bg-slate-300 text-lg cursor-pointer"> - </button>

    );
};

export default Decrement;