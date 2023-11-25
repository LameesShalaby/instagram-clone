import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjeM75LZLfu2G38_5AI8HHTXyt16QetJI",
  authDomain: "instagram-clone-5578e.firebaseapp.com",
  projectId: "instagram-clone-5578e",
  storageBucket: "instagram-clone-5578e.appspot.com",
  messagingSenderId: "1026440990322",
  appId: "1:1026440990322:web:7f5ab4ce4cec655b98bceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();