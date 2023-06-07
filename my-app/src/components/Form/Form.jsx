import React, { useState } from 'react';
import useHandleChange from '../Hooks/useHandleChange';

const Form = () => {
    const {  values, handleInputChange } = useHandleChange({
        fullname: "",
        email: "",
        hobby: false,
    });

    const [nameError, setNameError] = useState("");
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (values.fullname === "") {
            setNameError("Your fullname is empty");
        }
    };


    return (
        <div className="p-5">
            <form className="flex gap-x-3" autoComplete="off" onSubmit={handleSubmitForm}>
                <div className="fex gap-x-4 mb-3">
                    <div className="flex flex-col gap-y-3">
                        <input type="text" name="fullname" className="w-full max-w-[300px] p-5 border border-gray-300 rounded-lg mr-2 mb-3" placeholder="Enter your name..." onChange={handleInputChange} />
                        {nameError}
                    </div>

                    <input type="email" name="email" className="w-full max-w-[300px] p-5 border border-gray-300 rounded-lg mr-3 mb-3" placeholder="Enter your email..." onChange={handleInputChange} />
                  
                    {/* <input type="checkbox" name="hobby" onChange={handleInputChange} /> */}
                    <button type="submit" className="p-3 rounded text-white bg-blue-500"> Submit </button>
                </div>
            </form>

            {/* <textarea name="message" className="w-full max-w-[300px] p-5 border border-gray-300 rounded-lg" placeholder="Enter your message" onChange={handleTextAreaChange}></textarea>
            <div>{message}</div>

            <select name="country" onChange={handleSelectChange}>
                <option value="vietnam">VN</option>
                <option value="usa">USA</option>
                <option value="england">UK</option>
            </select>
            <div>{country}</div> */}
        </div>
    );
};

export default Form;