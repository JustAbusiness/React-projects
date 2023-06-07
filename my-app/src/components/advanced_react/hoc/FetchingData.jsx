import React from 'react';
import WithLoading from './withLoading';


const FetchingData = ({data}) => {
 console.log("🚀 ~ file: FetchingData.jsx:6 ~ FetchingData ~ data:", data)
 
    return (
       <>
        {/* {data.map((items) =>
         <div key={items}>
                {items}
        </div>)} */}
       </>
    );
};

export default WithLoading(FetchingData, "https://hn.algolia.com/api/v1/search?query=react");