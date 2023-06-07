import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className="feature" style={{ height: "100px" }}>
            <p>{props.index}</p>
            <img src={props.image} alt="" className="feature-img" style={{ height: "200px", width: "300px" }} />
            <h3 className="feature-title">
                <h4>{props.name}</h4>
                <p className="fullName"> {props.title || "Well this is a back-up title"}</p>
            </h3>
            <p className="feature-desr">
                {props.description}
            </p>
        </div>
    );
};

export default YoutubeItem;