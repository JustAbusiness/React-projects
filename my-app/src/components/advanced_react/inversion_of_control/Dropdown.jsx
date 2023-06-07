import React, { useState } from 'react';

const Dropdown = () => {
    const [show, setShow] = useState(false);
    const handleToggleDown = () => {
        setShow(!show);
    }

    return (
        <div className="relative  w-full max-w-[300px] mx-auto mt-10">
            <div onClick={handleToggleDown} className="placeholder flex items-center justify-between p-4 border border-gray-300 rounded cursor-pointer">
                Please select an option
            </div>

            {show && <div className="options border border-gray-300 rounded">
                <div className="option-item p-4 cursor-pointer"> Front End</div>
                <div className="option-item p-4 cursor-pointer"> Back End</div>
                <div className="option-item p-4 cursor-pointer"> FullStack</div>
            </div>}
        </div>
    );
};

export default Dropdown;   