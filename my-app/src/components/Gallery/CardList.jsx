import React from 'react';
import { useGallery } from '../../contexts/GalleryContext';

const CardList = () => {
    const { cartItems, removeFromCart } = useGallery();
    console.log(cartItems);
    return (
        <div className="py-10 px-5 flex flex-col gap-5 items-start">
            {cartItems.length > 0 && cartItems.map((item) => (
                <div className="inline-flex gap-x-7 justify-between items-center" key={item.id}>
                    <img src={item.url} alt="" className="w-20 h-20 rounded-md object-cover mb-2" />
                    
                    <button onClick={() => removeFromCart(item.id)} className="p-3 rounded-lg bg-red-500 text-white font-semibold text-sm" >Delete</button>
                </div>

            ))}
        </div>
    );
};

export default CardList;