import React, { createContext, useContext, useState } from "react";
import useLocalStorage from "../components/Hooks/useLocalStorage";

const GalleryContext = createContext();

const fakeData = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60=60",
        isLike: false
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        isLike: true
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        isLike: true
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1619179834700-7a886aac80cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGtvcmVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        isLike: false
    },
];


function GalleryProvider(props) {
    const [storedValue, setValue] = useLocalStorage("photos", fakeData);
    console.log(storedValue);
    const [photos, setPhotos] = useState(fakeData);
    const [cartItems, setCartItems] = useState([]);
    const [favouristList, setFavouristList] = useState([]);

    // 1 .Viết các chức năng cho PhotoList
    function toggleFavorite(photoId) {                      // Làm chức năng nhấm hình trái tim đổi màu 
        const updateArray = photos.map(photo => {
            if (photo.id === photoId) {
                return { ...photo, isLike: !photo.isLike }
            }
            return photo;
        });
        setPhotos(updateArray);        // Updated lại hình ảnh 
        setValue(updateArray);         // lưu vào local Storage 
    }

    // 2. Viết chức năng thêm giỏ hàng 
    function addToCart(newItem) {
        setCartItems((prevItems) => {
            const isExisted = prevItems.some((item) => item.id === newItem.id);
            if (isExisted) {
            
                return [...prevItems];   // Nếu giỏ hàng đã được cập nhật thì trả về những item đã có trước đó
            }

         
            return [...prevItems, newItem];    // Nếu chưa đc add thì đc thêm vào 
        });
        // Hàm setCartItems nhận vào một hàm callback để cập nhật giá trị của biến trạng thái. Hàm callback này trước tiên kiểm tra xem mặt hàng đã tồn tại trong giỏ hàng hay chưa bằng cách sử dụng phương thức some() của mảng. Nếu mặt hàng đã tồn tại trong giỏ hàng, hàm callback trả về một mảng mới bằng cách sao chép mảng giỏ hàng hiện tại (prevItems) và trả về mảng mới đó, không thay đổi giá trị của giỏ hàng.Ngược lại, nếu mặt hàng chưa tồn tại trong giỏ hàng, hàm callback trả về một mảng mới bằng cách sao chép các phần tử của mảng giỏ hàng hiện tại (prevItems) và thêm mục mới "newItem" vào cuối mảng

    }

    // 3. Viết chức năng xóa giỏ hàng 
    function removeFromCart(photoId) {
        setCartItems((prevItems) => {
            const result = prevItems.filter(item => item.id !== photoId)
            // setStorageCart(result);
            return result;
        });
        // Hàm setCartItems nhận vào một hàm callback để cập nhật giá trị của biến trạng thái. Hàm callback này sử dụng phương thức filter() của mảng để lọc các phần tử trong giỏ hàng và trả về một mảng mới chỉ chứa các phần tử có "id" khác với "photoId" được truyền vào hàm.Cuối cùng, hàm callback này trả về mảng mới để cập nhật giỏ hàng. Nếu phần tử có "id" trùng với "photoId" được loại bỏ khỏi mảng giỏ hàng hiện tại.
    }


    // . Gán các chức năng (function) vào value 
    const value = {
        photos, cartItems, favouristList, setPhotos, setCartItems, setFavouristList, toggleFavorite,
        addToCart, removeFromCart
    };

    return <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
}


function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === 'undefined') {
        throw new Error("useGallery must be used within a GalleryProvider")
    }
    return context;
}

export { GalleryProvider, useGallery };