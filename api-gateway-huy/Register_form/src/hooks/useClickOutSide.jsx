import React, { useEffect, useRef, useState } from 'react';

const useClickOutSide = () => {
    const [showDropdown, setShowDropDown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {         // Xử lý khi bấm click ra ngoài để tắt dropdown
        function handleClickOutDropDown(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropDown(false);
            }
        }
        document.addEventListener("click", handleClickOutDropDown)
        return () => {          // Clean up  function
            document.removeEventListener("click", handleClickOutDropDown);
        }
    }, []);

    return (
        <div className="relative w-full max-w-[300px] font-bold" ref={dropdownRef}>
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer" onClick={() => setShowDropDown(!showDropdown)}> Seleted </div>

            {showDropdown && <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
                <div className="py-5 cursor-pointer"> PHP </div>
                <div className="py-5 cursor-pointer"> Javascript </div>
                <div className="py-5 cursor-pointer">Java</div>
            </div>}
        </div>
    );
};

export default useClickOutSide;