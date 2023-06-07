import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; // Firestore là một cơ sở dữ liệu phân tán, được thiết kế để lưu trữ và đồng bộ dữ liệu trực tiếp giữa các thiết bị khác nhau và giữa các ứng dụng web và di động.
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9PwDpx414FdlPFPV0zo4KAq7kP20rX_Q",
  authDomain: "monkey-blog-3ee42.firebaseapp.com",
  projectId: "monkey-blog-3ee42",
  storageBucket: "monkey-blog-3ee42.appspot.com",
  messagingSenderId: "183168957888",
  appId: "1:183168957888:web:a9934b1d556d6863a0dc25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);               // sử dụng để truy cập đối tượng Authentication trong Firebase SDK
