import React from 'react';
import { useParams, useNavigate} from "react-router-dom";            // Lấy slug địa chỉ link 

const BlogPageDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();           // Quay trở về trang trước đó 

    return (
        <div className="mt-5">
            Blog Page Detail
            <button onClick={() => navigate("/blog")} className="p-3 rounded-md text-white bg-green-400 ml-5">Navigate to Blog Page </button>
        </div>
    );
};

export default BlogPageDetail;