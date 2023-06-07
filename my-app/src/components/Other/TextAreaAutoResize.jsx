import React, { useEffect, useRef, useState } from 'react';

const TextAreaAutoResize = () => {
    const [text, setText] = useState("demo");
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState("auto");

    const handleChange = (event) => {
        console.log(event.target.value);
        setTextareaHeight("auto");
        setText(event.target.value);
    }

    useEffect(() => {
        setTextareaHeight(`${textareaRef?.current?.scrollHeight}px`);
    }, [text])

    return (
        <div className="p-5">
            <textarea className="w-full max-w-[400px] p-5 mt-5 mx-5 rounded-lg border border-gray-400 resize-none focus:border-blue-700 overflow-hidden transition-all"
                placeholder="Please enter your content..."
                value={text}
                ref={textareaRef}
                style={{ height: textareaHeight }}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default TextAreaAutoResize;