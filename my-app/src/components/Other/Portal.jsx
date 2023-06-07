import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

function createPortalWrapper() {
    const element = document.createElement("div");
    element.id = "portal-wrapper";
    return element;
}

const portalWrapperElm = createPortalWrapper();
const Portal = ({ children,
    visible = false,
    containerClassname,
    bodyClassName,
    onClose = () => { },
    containerStyle,
    bodyStyle,
}) => {

    useEffect(() => {
        document.body.appendChild(portalWrapperElm);
    }, []);

    const renderContent = (
        <div className={`fixed inset-0 z-[9999] ${visible ? '' : "opacity-0 invisible"} ${containerClassname}`} style={containerStyle}>
            <div className="overlay absolute inset-0 bg-black bg-opacity-20" onClick={onClose}></div>
            <div className={`content relative z-10 ${bodyClassName}`} style={bodyStyle}>
                {children}
            </div>
        </div>
    );

    return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
    containerClassname: PropTypes.string,
    bodyClassName: PropTypes.string,
    onClose: PropTypes.func,
    visible: PropTypes.bool.isRequired,
    containerStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    children: PropTypes.node
};

export default Portal;