import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Portal from '../Other/Portal';

const TooltipAdvance = ({ title, children }) => {
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({
        top: 0,
        left: 0,
        height: 0,
        width: 0,
    });               // Xét vị trí
    const handleMouseEnter = (e) => {
        setCoords(e.target.getBoundingClientRect());
        setVisible(true);
    }
    const handleMouseLeave = () => {
        setVisible(false);
    }


    return (
        <div className="relative inline-block">
            <CSSTransition in={visible}
                classNames="fade"
                timeout={300}
                unmountOnExit
            >
                {(status) => (
                    <Portal visible={status !== "existed"}>
                        <p className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[150px] -translate-x-2/4"
                            style={{ top: coords.top, left: coords.left + coords.width / 2, }}> {children} </p>
                    </Portal>
                )}

                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {title}
                </div>
            </CSSTransition>
        </div>
    );
};

export default TooltipAdvance;