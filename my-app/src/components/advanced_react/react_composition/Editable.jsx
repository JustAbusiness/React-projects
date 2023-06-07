import React, { useState } from 'react';
import useToggle from './UseToggle';

const Editable = () => {
    const {value:show,  handleToggleValue:ToggleClick} = useToggle();

    return (
        <div>
            {show && <input type="text" className="p-3 border border-slate-500 rounded-md" />}
            <button onClick={ToggleClick}> Open Input </button>
        </div>
    );
};

export default Editable;