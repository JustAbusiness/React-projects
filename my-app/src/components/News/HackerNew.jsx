import axios from 'axios';
// import lodash from "lodash";
import React, { useEffect, useRef, useState } from 'react';


const HackerNew = () => {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);             // Set Loading khi truy cap trang
    const [errorMessage, setErrorMessage] = useState("");      // Set Lỗi khi không load được API
    const handleFecthData = useRef({});
    const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${query}`);

    const isMounted = useRef(true);
    useEffect(() => {   
        return () => {
            isMounted.current = false;
        }
    })

    handleFecthData.current = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setTimeout(() => {
                if (isMounted.current) {
                    setHits(response.data?.hits || []);
                    setLoading(false);
                }
            }, 3000);

        } catch (error) {
            setLoading(false)
            setErrorMessage(`Running error : ${error}`);
        }
    };

    // const handleUpdateQuery = lodash.debounce((e) => {           // => Chống load kiểm tra query không muốn hiện data tùm lum kết quả
    //     setQuery(e.target.value);
    // }, 500);


    React.useEffect(() => {
        handleFecthData.current();
    }, [url])

    return (
        <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 ">
            <div className="flex mb-5 gap-x-3">
                <input type="text" className="border border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-700" defaultValue={query} onChange={(e) => setQuery(e.target.value)} placeholder="Typing..." />

                <button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)} className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"> Fetching </button>
            </div>

            {loading && (<div className="loading w-8 h-8 rounded-full border-blue-600 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>)}                           {/* Load hình đang tải  */}

            {!loading && errorMessage && <p className="text-red-600 my-5"> {errorMessage} </p>}              {/* =>  Xử lý lỗi network  */}

            <div className="flex flex-wrap gap-5">
                {!loading && hits.length > 0 && hits.map((item, index) => {
                    if ( !item.title || item.title.length <= 0 ) return null;
                    return (
                        <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>  {item.title} </h3>
                    );
                })}
            </div>

        </div>
    );
};

export default HackerNew;