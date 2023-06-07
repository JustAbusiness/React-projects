import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux-toolkit/counterSlice';


const Counter = (props) => {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement());
    }


    return (
        <div className="flex flex-col items-center p-5 bg-slate-100 shadow-sm w-[200px] mx-auto mt-20">
            <h2> Count : {count}</h2>
            <div className="flex justify-center items-center gap-x-5">
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>

            </div>
        </div>
    );
};

export default Counter;