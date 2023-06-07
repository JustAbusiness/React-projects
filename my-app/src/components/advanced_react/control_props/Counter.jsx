import React, { useState } from 'react';
import Decrement from './Decrement';
import Increment from './Increment';
import Count from './Count';
import { CountProvider } from './count-context';

const Counter = ({ value = null, intialValue = 0, onChange }) => {
    const [count, setCount] = useState(intialValue);         // initial value là giá trị ng nhập ban đầu
    const isControlled = value !== null && !!onChange;
    const getCount = () => isControlled ? value : count;    // Kiểm tra xem giá trị ban đầu có phải là 0 hay k
    const handleCountChange = (newValue) => {
        isControlled ? onChange(newValue) : setCount(newValue);
    }

    const handleIncrement = () => {
        handleCountChange(getCount() + 1);
    }

    const handleDecrement = () => {
        handleCountChange(getCount() - 1);
    }


    return (
        <CountProvider value={{ count: getCount(), handleIncrement, handleDecrement }}  >
            <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
                <Decrement></Decrement>
                <Count></Count>
                <Increment></Increment>
            </div>
        </CountProvider>

    );
};

export default Counter;