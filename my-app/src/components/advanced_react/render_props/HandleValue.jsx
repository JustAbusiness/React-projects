import React, { useState } from 'react';

const HandleValue = () => {
   return <Input render={(value) =>
    
        <DisplayValue value={value}></DisplayValue>
    }>

   </Input>
};



const Input = (props) => {
    const [value, setValue] = useState("Hi");
    return (
        <>
            <input type="text" value={value} className="border border-slate-400 p-3 rounded-md" onChange={(e) => setValue(e.target.value)} />
            {props.render(value)}
        </>
    );
}

const DisplayValue = ({ value }) => {

    return <span className="text-2xl text-center text-blue-500">{value}</span>
}

export default HandleValue;

