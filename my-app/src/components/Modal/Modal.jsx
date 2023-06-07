import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const Modal = ({ open = false, handleClose = () => { } }) => {
    if (typeof document === "undefined") return <div className="modal"></div>;         // Check condition 

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${open ? '' : "opacity-0 invisible" }`}>
            <div className="absolute inset-0 bg-black bg-opacity-50 overlay" onClick={handleClose}>
            </div>

            <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[482px] h-[480px]">
                <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 text-center bg-gray-100 rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4" onClick={handleClose}> X </span>
                <h2 className="mb-10 text-4xl font-semibold text-center text-black"> Welcome Back !</h2>
                
                <div className="flex flex-col gap-3 mb-5">
                    <label htmlFor="Email" className="text-sm cursor-pointer" > Email address </label>
                    <input type="email" name="Email" id="Email" placeholder="Enter your email" className="w-full p-4 text-sm leading-4 border border-gray-400 rounded-lg focus:border-gray-500" />
                </div>
                
                <div className="flex flex-col gap-3 mb-10">
                    <label htmlFor="Password" className="text-sm cursor-pointer" > Password </label>
                    <input type="password" name="Password" id="Password" placeholder="Enter your password" className="w-full p-4 text-sm leading-4 border border-gray-400 rounded-lg focus:border-gray-500" />
                </div>
                
                <button className="w-full p-4 mx-auto font-semibold text-white bg-green-500 rounded-xl">Sign in</button>
            </div>

        </div>,
        document.querySelector("body")
    );
};

Modal.prototype = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default Modal;