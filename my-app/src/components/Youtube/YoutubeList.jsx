import React from 'react';
import { YoutubeData } from '../../YoutubeData';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    return (
        <div>
            {/* {props.children} */}
            {YoutubeData.map((item, index) => (
                <YoutubeItem
                    index={index + 1}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    name={item.name}>
                </YoutubeItem>

            ))};
        </div>
    );
};

export default YoutubeList;