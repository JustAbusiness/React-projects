import React, { useEffect, useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    // const  handleCount = () => {
    //     setTimeout(function delay() {
    //         setCount((count) => count + 1)
    //     })
    // }

    const [info, setInfo] = useState({
        firstname: "Pham",
        lastname: "Huy",
    });

    useEffect(() => {
        console.log("Yeah Yeah");
    }, [info.firstname]);

    return (
        <div className="p-5 flex gap-x-4 items-center">

            <input type="text" name="firstName" value={info.firstname} onChange={(e) => setInfo({ ...info, firstname: e.target.value, })} />
            <span className="text-2xl font-bold"> {count} </span>
            <button onClick={() => setCount(count + 1)} className="inline-block p-3 bg-green-600 hover:bg-green-700 text-white rounded-xl"> Increment </button>
        </div>
    );
};

export default Count;