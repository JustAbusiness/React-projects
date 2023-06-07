import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const handleFixedHeader = () => {
            console.log("Fixed");
        };
        window.addEventListener("scroll", handleFixedHeader);

        return () => {                  // CLean up useEffect 
            window.removeEventListener("scroll", handleFixedHeader);
        };
    }, []);

    return (
        <div className="p-5 bg-black w-full" id="header">

        </div>
    );
};

export default Header;