import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);             // Set Loading khi truy cap trang
    const [errorMessage, setErrorMessage] = useState("");      // Set Lỗi khi không load được API
    const handleFecthData = useRef({});
    const [url, setUrl] = useState(initialUrl);
    const isMounted = useRef(true);
    
    useEffect(() => {   
        
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    },[])

    handleFecthData.current = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            console.log(response.data)
                if (isMounted.current) {
                    setData(response.data || []);
                    setLoading(false);
                }

        } catch (error) {
            setLoading(false)
            setErrorMessage(`Running error : ${error}`);
        }
    };

    // const handleUpdateQuery = lodash.debounce((e) => {           // => Chống load kiểm tra query không muốn hiện data tùm lum kết quả
    //     setQuery(e.target.value);
    // }, 500);
    useEffect(() => {
        handleFecthData.current();
    }, [url]);


    return {
        loading,
        errorMessage,
        setUrl,
        data,
    }
}