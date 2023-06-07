import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getAPIPhotos = async (page) => {
    try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// MAIN HANDLE 

const Photos = () => {
    const [randomPhotos, setRandomPhotos] = useState([]);
    const [nextPage, setNextPage] = useState(1);

    const handleLoadMorePhotos = async () => {
        const images = await getAPIPhotos(nextPage);             /* => GET API Photos */
        const newPhotos = [...randomPhotos, ...images];
        setRandomPhotos(newPhotos);
        setNextPage(nextPage + 1)       /* => Mỗi lần nhấm thêm sẽ load nhiều trang hơn  */
        };
    

    useEffect(() => {
        handleLoadMorePhotos();
    });

    return (
        <div>
            <div className="grid grid-cols-4 gap-5 p-5 h-[200px]">
                {randomPhotos.length > 0 && randomPhotos.map((item, index) => (          /* => Kiểm tra điều kiện */
                    <div key={item.id} className="p-3 bg-white shadow-md rounded-lg">
                        <img src={item.download_url} alt={item.author} className="w-full h-full rounded-lg object-cover" />
                    </div>
                ))}
            </div>
            <div className="text-center">
                <button onClick={handleLoadMorePhotos} className="inline-block px-8 py-4 bg-purple-600 rounded-lg text-white text-xl mt-[20%]">Load more</button>
            </div>
        </div>
    );
};

export default Photos;