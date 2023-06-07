import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [message, setMessage] = useState("Evondev");
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(message);
        }, 2000);

        return () => {              // CLean up  trong UseEffect 
            clearInterval(timer);
        }
    }, [message]);


    return (
        <div>
            <input type="text" name="" onChange={(e) => setMessage(e.target.value)}
                value={message} />
        </div>
    );
};

export default Timer;