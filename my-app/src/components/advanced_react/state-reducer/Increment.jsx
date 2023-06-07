import React from 'react';
import { useCount } from './count-context';
import useCounter from './useCounter';

const Increment = ({onClick, ...props}) => {
  
    return (
        <>
            <button onClick={onClick} {...props}  className="increment p-4 flex items-center justify-center bg-slate-300 text-lg cursor-pointer "> + </button>
        </>
    );
};

export default Increment;