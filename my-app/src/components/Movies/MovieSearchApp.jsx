import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useDebounce from '../Hooks/useDebounce';
import LoadingSkeleton from '../Loading/LoadingSkeleton';

// https://api.themoviedb.org/3/movie/550?api_key=dc162cb708fc5da095dbe5f2cb2c1862
// https://api.themoviedb.org/3/movie/550?api_key=dc162cb708fc5da095dbe5f2cb2c1862&query=%27%27
//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

const MovieSearchApp = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const debounceValue = useDebounce(query, 500);          // Import từ bên Hooks
    const [loading, setLoading] = useState(true);

    console.log(debounceValue);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);              // Mới vào là cho nó xoay cái loading
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc162cb708fc5da095dbe5f2cb2c1862&query='${debounceValue}'`);
            // console.log(response.data.results);

            if (response.data.results) {            // Kiểm tra điều kiện có API trước
                setMovies(response.data.results);
                setLoading(false);
            }
        }
        fetchData();
    }, [debounceValue])

    return (
        <div className="p-10 ">
            <div className="w-full max-w-[500px] mx-auto mb-20">
                <input type="text" className="w-full p-5 rounded-lg border border-gray-300 shadow-[0px_0px_0px_3px_rgba(125,_106,_255,_0.2)]" placeholder="Search movie..." onChange={(e) => setQuery(e.target.value)} />
            </div>

            {loading && <div className="grid grid-cols-3 gap-40">
                <MovieItemLoading></MovieItemLoading>
                <MovieItemLoading></MovieItemLoading>
                <MovieItemLoading></MovieItemLoading>
            </div>}

            <div className="grid grid-cols-3 gap-40">
                {!loading && movies.length > 0 && movies.map((item, index) => (
                    <MovieItem key={item.id} data={item}></MovieItem>
                ))}
            </div>
        </div>
    );
};


const MovieItem = ({ data }) => {          // props lúc này là data={item} ở trên
    // console.log(data);
    return (
        <div className="bg-white p-3 rounded-2xl shadow-md flex flex-col">
            <div className="h-[297px]">
                <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="p-7 flex-auto">
                <h3 className="text-lg text-black font-semibold mb-4"> {data.original_title} </h3>
                <p className="text-[#999] text-sm mb-6 !leading-loose">{data.overview}</p>
            </div>
            <div className="flex items-center gap-x-3 ml-7">
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
                <span className="text-sm font-semibold text-[#333]"> {data.vote_average}</span>
            </div>
        </div>
    );
};

const MovieItemLoading = () => {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-xl flex flex-col" >
            <div className="h-[297px]">
                <LoadingSkeleton width="100%" height="100%" radius="16px"></LoadingSkeleton>
            </div>
            <div className="p-7 flex-auto">
                <h3 className="text-lg text-black font-semibold mb-4">
                    <LoadingSkeleton height="20px"></LoadingSkeleton>
                </h3>
                <p className="text-[#999] text-sm mb-6 !leading-loose">
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-1"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                    <div className="h-1"></div>
                    <LoadingSkeleton height="10px"></LoadingSkeleton>
                </p>
            </div>
            <div className="flex items-center gap-x-3 ml-7">
                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns=""><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path></svg>
                <span className="text-sm font-semibold text-[#333]"><LoadingSkeleton height="10px" width="50px"></LoadingSkeleton> </span>
            </div>
        </div>
    )
};

export default MovieSearchApp;