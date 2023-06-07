import React from 'react';
import Portal from '../Other/Portal';
import { CSSTransition } from 'react-transition-group';

const ModalBase = ({ visible, onClose, children }) => {
    return <>
        <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
            {(status) => (
                <Portal visible={visible !== "exited"} onClose={onClose} containerClassname="flex items-center justify-center">
                    {children}
                </Portal>
            )}
        </CSSTransition>
    </>
};

export default ModalBase;