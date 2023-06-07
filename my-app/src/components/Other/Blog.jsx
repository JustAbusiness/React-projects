import React  from 'react';
import useHover from '../Hooks/useHover';
import useLinkNewTab from '../Hooks/useLinkNewTab';

const Blog = () => {
    const { contentRef: demoRef } = useLinkNewTab();           // Import từ folder Hooks 
    const { hovered, nodeRef } = useHover();

    return (
        <div className="entry-content" ref={demoRef}>
            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem molestiae non deserunt neque adipisci saepe possimus, odio nam dolorum soluta illum, fugiat laborum accusamus similique quasi eveniet itaque? Quidem?
                <a href="https://google.com" className={`underline ${hovered ? "text-green-700" : "" }`} ref={nodeRef}> google</a> ?
            </p>

            <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, labore pariatur exercitationem sequi nostrum est!
                <a href="https://google.com" className="underline"> google</a> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, vel.
            </p>

            <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quidem molestiae non deserunt neque adipisci
                <a href="https://google.com" className="underline"> google</a> ?
                saepe possimus, odio nam dolorum soluta illum, fugiat laborum accusamus similique quasi eveniet itaque? Quidem?

            </p>
        </div>
    );
};

export default Blog;