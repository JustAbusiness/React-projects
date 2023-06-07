// eslint-disable-next-line no-unused-vars
import React from 'react'
import { counterStore } from './../../store/counter-store';

const Counter = () => {
    const {count, increment, decrement}  = counterStore((state) => state);
    console.log("🚀 ~ file: Counter.jsx:7 ~ Counter ~ count:", count)

    
  return (
    <div className=''>
      <button onClick={increment}>
      <h2> Plus </h2>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </button>
      <span className='number'> {count} </span>
      <button onClick={decrement}>
        <div>
          <h2> Minus </h2>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 12h-15'
            />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default Counter
