import { useEffect, useState } from "react";

function WithLoading(Component, url) {
  return function WithLoadingComponent(props) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            console.log("🚀 ~ file: withLoading.jsx:10 ~ fetchData ~ data:", data)
            setNews(data.hits);         // Có cái này rùi mới gán vào 'news' điều kiện
        }

        fetchData();
    }, [])


    if (!news || news.length === 0) {
      return <div>Loading.... </div>;
    }

    return <Component data={news} {...props}></Component>;
  };
}


export default WithLoading;