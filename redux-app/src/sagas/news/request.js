import axios from "axios";

export default function requestGetNews(query = "wibu") {
    return axios.request({
        method: "GET",
        url: 'https://hn.algolia.com/api/v1/search?',
        params: {
            query,
        }
    });
}