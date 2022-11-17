
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAh0xf7Kq4f10WfCstJDEogbFwQ3jJzr3o",
  authDomain: "maltimart-2fb9e.firebaseapp.com",
  projectId: "maltimart-2fb9e",
  storageBucket: "maltimart-2fb9e.appspot.com",
  messagingSenderId: "208170687951",
  appId: "1:208170687951:web:f17b2b2fee2fd2dada06ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;