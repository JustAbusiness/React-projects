import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const DropDownPortal = () => {
    const [showDropdown, setShowDropDown] = useState(false);
    const dropdownRef = useRef(null);
    const [coords, setCoords] = useState({});

    const handleClick = (e) => {
        setCoords(dropdownRef.current.getBoundingClientRect());       // Lấy tọa độ 
    };

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
        <div className="relative w-full max-w-[300px] font-bold mt-5 p-5" ref={dropdownRef}>
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer" onClick={handleClick}> Seleted </div>
            {showDropdown && <DropDownList coords={coords}></DropDownList>}
        </div>
    );
};


function DropDownList({ coords }) {
    if (typeof document === "undefined") return null;
    return ReactDOM.createPortal(
        <div 
            className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white" style={{ left: coords.left, top: coords.top, width: coords.width, height: coords.height }}>

            <div className="py-5 cursor-pointer hover:bg-gray-400 rounded-md"> PHP </div>
            <div className="py-5 cursor-pointer hover:bg-gray-400 rounded-md "> Javascript </div>
            <div className="py-5 cursor-pointer hover:bg-gray-400 rounded-md">Java</div>
        </div>,
        document.querySelector("body")
    );
}

export default DropDownPortal;