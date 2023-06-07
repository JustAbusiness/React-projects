import React from 'react';
import { useAccordian } from './AccordianContext';
// Specialised components 

const AccoridanHeader = ({ children}) => {
    const {show, handleToggleValue} = useAccordian();      // Sử dụng Context

    return (
        <div>
            <div className="header cursor-pointer" onClick={handleToggleValue}> {children}
               {show ? <span> - </span> : <span> + </span> }
            </div>
        </div>
    );
};

export default AccoridanHeader;