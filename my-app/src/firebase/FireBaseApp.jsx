import { collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, serverTimestamp, updateDoc, query, getDoc, where, orderBy, limit } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from './config_firebase';

const colRef = collection(db, "posts")          // một collection trong Firestore là một tập hợp các documents, và có thể được truy cập thông qua một tham chiếu đến collection đó.

const FireBaseApp = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [postId, setPostId] = useState("");
    const [posts, setPosts] = useState("");
    const [singPost, setSinglePost] = useState("");

    useEffect(() => {
        // 1. Get collection data
        // getDocs(colRef)                 // getDocs() được sử dụng để truy vấn toàn bộ các documents trong collection được chỉ định bởi colRef và trả về một promise chứa một snapshot của kết quả truy vấn nà
        //     .then((snapshot) => {
        //         let posts = [];
        //         snapshot.docs.forEach((doc) => {
        //             posts.push({                    // hàm push() được gọi để thêm một phần tử vào cuối một mảng posts
        //                 id: doc.id,
        //                 ...doc.data(),
        //             })
        //         });
        //         setPosts(posts);          // lưu giá trị vào setPosts    
        //     })
        //     .catch((err) => {
        //         console.log(err);        // Trường hợp bị lỗi
        //     });

        /*  2. Get collection realtime */
        onSnapshot(colRef, (snapshot) => {    // onSnapshot dùng để lắng nghe sự kiện thay đổi của một bộ sưu tập (collection) trong Firebase Firestore. Khi có bất kỳ thay đổi nào xảy ra, hàm callback được đăng ký sẽ được gọi và snapshot mới nhất sẽ được truyền vào.
            let posts = [];
            snapshot.docs.forEach((doc) => {
                posts.push({                    // hàm push() được gọi để thêm một phần tử vào cuối một mảng posts
                    id: doc.id,
                    ...doc.data(),
                })
            });
            setPosts(posts);
        })

        const docRefSingle = doc(db, "posts", 'kDAcAJJbBoN0yWtNfuQV')           // Truy xuất 1 document
        // getDoc(docRefSingle).then((doc) => {
        //     console.log(doc.id, doc.data());
        // })

        /* Dạng realtime   */
        onSnapshot(docRefSingle, (doc) => {
            console.log(doc.id, doc.data())
        })

    }, [])

    // const handleAddPost = (e) => {
    //     e.preventDefault();         // Ngăn chặn load trang 
    //     addDoc(colRef, {           // addDoc là một phương thức của Firestore, một cơ sở dữ liệu NoSQL của Firebase. Phương thức này được sử dụng để thêm một tài liệu mới vào một bộ sưu tập (collection) trong Firestore.
    //         title,
    //         author,
    //     }).then(() => {
    //         console.log("success");
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    const handleAddPost = async (e) => {
        e.preventDefault();         // Ngăn chặn load trang 
        await addDoc(colRef, {           // addDoc là một phương thức của Firestore, một cơ sở dữ liệu NoSQL của Firebase. Phương thức này được sử dụng để thêm một tài liệu mới vào một bộ sưu tập (collection) trong Firestore.
            title,
            author,
            createdAt: serverTimestamp(),

        });
        console.log("success");
    }

    const handleRemovePost = async (e) => {
        e.preventDefault();
        const colRefDelete = doc(db, "posts", postId)         // 'doc' của Firebase để tạo một tham chiếu (reference) tới một tài liệu cụ thể trong bộ sưu tập "posts"
        await deleteDoc(colRefDelete, {
            title: "Wibu is your area ",
        });
        console.log("success");
    }

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        const colRefUpdate = query(db, "posts", postId)
        await updateDoc(colRefUpdate);
        console.log("success");
    }

    useEffect(() => {                   // Firestore queries
        const q = query(colRef, where("author", "==", "Tan"), orderBy("author"), limit(3));

        onSnapshot(q, (snapshot) => {
            let posts = [];
            snapshot.docs.forEach(doc => {
                posts.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            console.log(posts);
        })
    }, [])

    return (
        <div className="p-10">
            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                <form action="" onSubmit={handleAddPost}>
                    <input onChange={e => setTitle(e.target.value)} type="text" className="p-3 rounded border border-slate-500 w-full mb-5 outline-none focus:border-blue-500" placeholder="Enter your title" name="title" />

                    <input onChange={e => setAuthor(e.target.value)} type="text" className="p-3 rounded border border-slate-500 w-full mb-5 outline-none focus:border-blue-500" placeholder="Enter your author" name="author" />

                    <button type="submit" className="bg-green-400 p-3 rounded-lg text-black font-medium w-full text-xl">Add post</button>
                </form>
            </div>

            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                <form action="" onSubmit={handleRemovePost}>
                    <input onChange={e => setPostId(e.target.value)} type="text" className="p-3 rounded border border-slate-500 w-full mb-5 outline-none focus:border-blue-500" placeholder="Enter your id" name="postId" />

                    <button type="submit" className="bg-red-400 p-3 rounded-lg text-black font-medium w-full text-xl">Delete Post</button>
                </form>
            </div>

            <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
                {posts.length > 0 && posts.map((item) => (
                    <div key={item.id}>
                        <div>
                            {item.title} - {item.author}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FireBaseApp;