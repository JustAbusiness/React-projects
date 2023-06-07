import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './config_firebase';


const FireBaseAuth = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [userInfo, setUserInfo] = useState();
    onAuthStateChanged(auth, currentUser => {              // Check người dùng đã đăng nhập, đăng xuất
        if (currentUser) {
            setUserInfo(currentUser);       // lưu thông tin user
        } else {
            setUserInfo("");
        }
    });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,        //Hàm này sử dụng toán tử spread ... để sao chép toàn bộ giá trị trong state object value, và sau đó cập nhật giá trị của thuộc tính tương ứng với e.target.name (tức là tên của input field được thay đổi) bằng giá trị mới được nhập vào e.target.value
        });
    };

    // CHỨC NĂNG SUBMIT FORM
    const handleCreateUser = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, values.email, values.password);
    }


    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
            <form onSubmit={handleCreateUser}>
                <input onChange={handleInputChange} type="email" className="p-3 rounded border border-slate-500 w-full mb-5 outline-none focus:border-blue-500" placeholder="Enter your email" name="email" />

                <input onChange={handleInputChange} type="password" className="p-3 rounded border border-slate-500 w-full mb-5 outline-none focus:border-blue-500" placeholder="Enter your password" name="password" />

                <button type="submit" className="bg-green-400 p-3 rounded-lg text-black font-medium w-full text-xl">Sign Up</button>
            </form>

            <div className="mt-10">
                <span className="text-center text-xl">{userInfo?.displayName}</span>
                <button onClick={handleSignOut} className="bg-red-400 p-3 rounded-lg text-black font-medium w-full text-xl"> Sign Out </button>
            </div>
        </div>
    );
};

export default FireBaseAuth;