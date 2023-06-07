import React from 'react';
// import useToggle from './UseToggle';
import AccoridanHeader from './AccoridanHeader';
import AccordianContent from './AccordianContent';
import { AccordianProvider } from './AccordianContext';

const Accordian = ({ header, children }) => {
    // const { value: show, handleToggleValue } = useToggle();
    return (
        <AccordianProvider>
            <div>
                {/* <div className="header cursor-pointer" onClick={handleClick}>Accordian header <span> + </span></div> */}
                {/* { show && <div className="content">Accordian content </div>} */}
                <AccoridanHeader >  {header} </AccoridanHeader>
                <AccordianContent >  {children} </AccordianContent>
            </div>
        </AccordianProvider>
    );
};

export default Accordian;