import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNUk1V59XW4fvS70-XtkiY2wfiaW5QOjo",
    authDomain: "wibu-app-b4b08.firebaseapp.com",
    projectId: "wibu-app-b4b08",
    storageBucket: "wibu-app-b4b08.appspot.com",
    messagingSenderId: "1052250281253",
    appId: "1:1052250281253:web:ea6c98874e817d44d7b6cc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Init Service
export const db = getFirestore(app);

// SignUp Function 
 export const auth = getAuth(app);