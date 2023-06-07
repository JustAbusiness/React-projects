// import lodash from "lodash";
import React, { useState }  from 'react';
import useHackerNewsAPI from '../Hooks/useHackerNewsAPI';


const HackerNewWithHook = () => {
    const [query , setQuery] = useState("");
    const {loading, errorMessage, setUrl, data } = useHackerNewsAPI(`https://hn.algolia.com/api/v1/search?query=react`, { items: [] });

    return (
        <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 ">
            <div className="flex mb-5 gap-x-3">
                <input type="text" className="border border-gray-200 block w-full rounded-md p-5 transition-all focus:border-blue-700" defaultValue={query} onChange={(e) => setQuery(e.target.value)} placeholder="Typing..." />

                <button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)} className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"> Fetching </button>
            </div>

            {loading && (<div className="loading w-8 h-8 rounded-full border-blue-600 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>)}                           {/* Load hình đang tải  */}

            {!loading && errorMessage && <p className="text-red-600 my-5"> {errorMessage} </p>}              {/* =>  Xử lý lỗi network  */}

            <div className="flex flex-wrap gap-5">
                {!loading && data.hits.length > 0 && data.hits.map((item, index) => {
                    if (!item.title || item.title.length <= 0) return null;
                    return (
                        <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>  {item.title} </h3>
                    );
                })}
            </div>

        </div>
    );
};

export default HackerNewWithHook;