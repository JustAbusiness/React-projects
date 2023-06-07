import React from 'react';
import { useGallery } from '../../contexts/GalleryContext';
import PropTypes from "prop-types";

const PhotoList = () => {
    const { photos, cartItems } = useGallery();
    console.log(cartItems);
    return (
        <div className="py-10 px-5 ">
            <div className="grid grid-cols-4 gap-8">
                {photos.length > 0 && photos.map((item) => <PhotoItem key={item.id} info={item}> </PhotoItem>)}
            </div>
        </div>
    );
};


const PhotoItem = ({ info: { url, isLike, id } }) => {
    const { toggleFavorite, addToCart} = useGallery();
    const item = {url, isLike, id};

    return (
        <div className="relative h-[300px] cursor-pointer group">
            <img src={url} alt="" className="w-full h-full object-cover rounded" />
            <span onClick={() => toggleFavorite(id)} className="absolute right-3 top-3 z-10 cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all" >
                <svg width="29" height="25" viewBox="0 0 29 25" fill="none" className="max-w-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.00927 0C3.13875 0 0 3.10651 0 6.93918C0 10.0331 1.22662 17.376 13.3008 24.7988C13.5171 24.9304 13.7654 25 14.0185 25C14.2717 25 14.52 24.9304 14.7363 24.7988C26.8105 17.376 28.0371 10.0331 28.0371 6.93918C28.0371 3.10651 24.8983 0 21.0278 0C17.1573 0 14.0185 4.20556 14.0185 4.20556C14.0185 4.20556 10.8798 0 7.00927 0Z" fill={` ${isLike ? "red" : "white"} `}  />
                </svg>
            </span>
            <button onClick={() => addToCart(item)} className="py-3 px-6 bg-yellow-100 rounded-lg text-black text-center absolute bottom-5 left-2/4 -translate-x-2/4 text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"> Add to cart </button> 
            {/* addToCart lúc này sẽ cập nhậy lại tất cả giá trị của giỏ hàng đó  */}
        </div>
    );
}

PhotoItem.propsTypes = {
    url: PropTypes.string,
    id: PropTypes.number,
    isLike: PropTypes.bool,
}

export default PhotoList;  