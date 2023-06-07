import React, { useState } from 'react';
import DropDown from './DropDown';


const Wibu = () => {
    const [ data, setData] = useState(false);
    const dropDown = () => {
        setData(!data);
    }

    return (
        <div>
            <div className="relative w-full max-w-[300px] font-bold" >
            <div className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer" onClick={() => dropDown()}> Seleted </div>

            { data && <div className="p-5 border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white">
                <div className="py-5 cursor-pointer"> PHP </div>
                <div className="py-5 cursor-pointer"> Javascript </div>
                <div className="py-5 cursor-pointer">Java</div>
            </div> }
        </div>
            
        </div>
    );
};

export default Wibu;