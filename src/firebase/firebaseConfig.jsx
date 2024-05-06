// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCF1v2i3B1YExCksXS89BT5h3ABS_cTJk",
  authDomain: "myfirstapp-47504.firebaseapp.com",
  projectId: "myfirstapp-47504",
  storageBucket: "myfirstapp-47504.appspot.com",
  messagingSenderId: "875376895035",
  appId: "1:875376895035:web:b78065b24c05495e01681e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
