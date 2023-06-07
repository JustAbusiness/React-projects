import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useGallery } from '../../contexts/GalleryContext';

const HeaderMain = () => {
    const { user, setUser } = useAuth();
    const { photos, cartItems } = useGallery();
   


    // 1.Làm chức năng lưu những sản phẩm được yêu thích (true) vào Cart items
    const favoriteCount = photos.length > 0 ? photos.filter((item) => item.isLike === true).length : 0; // => Nếu độ dài của mảng "photos" lớn hơn 0, điều kiện đầu tiên được đánh giá là "true" và phương thức filter() được sử dụng để lọc ra tất cả các phần tử trong mảng "photos" có thuộc tính "isLike" là "true". Sau đó, độ dài của mảng kết quả này được tính bằng phương thức length() và được gán cho biến "favoriteCount".Nếu độ dài của mảng "photos" bằng 0, điều kiện đầu tiên được đánh giá là "false" và biến "favoriteCount" được gán giá trị là 0.

    // 2. Làm chức năng lưu những hình trái tim products 
    const addCartCount =  cartItems.length; 


    return (
        <div className="p-5 bg-white shadow-md flex items-center justify-center">
            {user ? <div className="flex items-center gap-x-3">
                <img src="https://images.unsplash.com/photo-1595309959777-08d5da891d7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hcnV0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""
                    className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-sm font-medium"> Welcome back! <strong> {user.fullname}</strong></span>
            </div>

                : <span className="text-sm font-semibold"> Welcome </span>}


            <div className="ml-auto mr-5 flex items-center gap-5">
                <span className="relative w-8"><svg className="max-w-full" width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.99988 0.59375C1.22323 0.59375 0.593628 1.22335 0.593628 2C0.593628 2.77665 1.22323 3.40625 1.99988 3.40625L1.99988 0.59375ZM6.99988 2L8.36414 1.65893C8.20764 1.03292 7.64516 0.59375 6.99988 0.59375L6.99988 2ZM33.9999 29.4062C34.7765 29.4062 35.4061 28.7766 35.4061 28C35.4061 27.2233 34.7765 26.5937 33.9999 26.5937V29.4062ZM37.9999 6L39.3641 6.34107C39.4692 5.92096 39.3748 5.4759 39.1083 5.13458C38.8418 4.79326 38.4329 4.59375 37.9999 4.59375V6ZM33.9999 22V23.4062C34.6452 23.4062 35.2076 22.9671 35.3641 22.3411L33.9999 22ZM1.99988 3.40625L6.99988 3.40625L6.99988 0.59375L1.99988 0.59375L1.99988 3.40625ZM5.63561 2.34107L6.63561 6.34107L9.36414 5.65893L8.36414 1.65893L5.63561 2.34107ZM6.63561 6.34107L10.6356 22.3411L13.3641 21.6589L9.36414 5.65893L6.63561 6.34107ZM11.9999 20.5937H10.9999V23.4062H11.9999V20.5937ZM10.9999 29.4062H33.9999V26.5937H10.9999V29.4062ZM6.59363 25C6.59363 27.4335 8.56637 29.4062 10.9999 29.4062V26.5937C10.1197 26.5937 9.40613 25.8802 9.40613 25H6.59363ZM10.9999 20.5937C8.56637 20.5937 6.59363 22.5665 6.59363 25H9.40613C9.40613 24.1198 10.1197 23.4062 10.9999 23.4062V20.5937ZM7.99988 7.40625H37.9999V4.59375H7.99988V7.40625ZM36.6356 5.65893L32.6356 21.6589L35.3641 22.3411L39.3641 6.34107L36.6356 5.65893ZM33.9999 20.5937H11.9999V23.4062H33.9999V20.5937ZM32.5936 36C32.5936 36.3279 32.3278 36.5937 31.9999 36.5937V39.4062C33.8811 39.4062 35.4061 37.8812 35.4061 36H32.5936ZM31.9999 36.5937C31.672 36.5937 31.4061 36.3279 31.4061 36H28.5936C28.5936 37.8812 30.1187 39.4062 31.9999 39.4062V36.5937ZM31.4061 36C31.4061 35.6721 31.672 35.4062 31.9999 35.4062V32.5937C30.1187 32.5937 28.5936 34.1188 28.5936 36H31.4061ZM31.9999 35.4062C32.3278 35.4062 32.5936 35.6721 32.5936 36H35.4061C35.4061 34.1188 33.8811 32.5937 31.9999 32.5937V35.4062ZM12.5936 36C12.5936 36.3279 12.3278 36.5937 11.9999 36.5937V39.4062C13.8811 39.4062 15.4061 37.8812 15.4061 36H12.5936ZM11.9999 36.5937C11.672 36.5937 11.4061 36.3279 11.4061 36H8.59363C8.59363 37.8812 10.1187 39.4062 11.9999 39.4062V36.5937ZM11.4061 36C11.4061 35.6721 11.672 35.4062 11.9999 35.4062V32.5937C10.1187 32.5937 8.59363 34.1188 8.59363 36H11.4061ZM11.9999 35.4062C12.3278 35.4062 12.5936 35.6721 12.5936 36H15.4061C15.4061 34.1188 13.8811 32.5937 11.9999 32.5937V35.4062Z" fill="black" />
                </svg>
                <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs  text-white bg-pink-600
                absolute right-0 -top-1 translate-x-2/4"> {addCartCount || 0} </span>
                </span>
                <span className="relative w-8">
                    <svg className="max-w-full" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9999 17.0001C41.9999 29.4888 24.0006 40.0001 24.0006 40.0001C24.0006 40.0001 5.99986 29.3334 5.99986 17.0254C5.99986 12.0001 9.99986 8.00005 14.9999 8.00005C19.9999 8.00005 23.9999 14.0001 23.9999 14.0001C23.9999 14.0001 27.9999 8.00005 32.9999 8.00005C37.9999 8.00005 41.9999 12.0001 41.9999 17.0001Z" stroke="black" stroke-width="2.8125" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-xs text-white bg-pink-600 absolute right-1 -top-1 translate-x-2/4"> {favoriteCount || 0}   </span>
                </span>
            </div>

            {/* Đăng xuất  */}
            <button className="p-2 rounded-md bg-gray-300 shadow-md text-center text-black ml-auto"
                onClick={() => setUser(false)}
            >
                Log out
            </button>

        </div>
    );

};

export default HeaderMain;