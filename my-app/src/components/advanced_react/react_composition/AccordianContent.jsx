import React from 'react';
import { useAccordian } from './AccordianContext';
// Specialised components 

const AccordianContent = ({  children }) => {
    const {show} = useAccordian();          // Sử dụng Context

    return (
        <div>
            {show && <div className="content"> {children} </div>}
        </div>
    );
};

export default AccordianContent;