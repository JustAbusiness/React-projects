import React, { useEffect } from 'react';

const Input = () => {
    const divRef = React.useRef();
    const inputRef = React.useRef();

    useEffect(() => {
        console.log(divRef.current);
        // if (divRef.current) divRef.current.style.backgroundColor = "green";
        if (inputRef.current ) inputRef.current.focus();
    }, []);

    return (
        <div className="input-div" ref={divRef}>
            <input ref={inputRef} type="text" placeholder="Just Auto Focuc Typing" className="inline-block p-5 border border-gray-200 focus:border-blue-800 " />
        </div>
    );
};

export default Input;