// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsp5p14_dp1k8KVpuOWepwp7ofpmsjpYE",
    authDomain: "tusakay-school.firebaseapp.com",
    projectId: "tusakay-school",
    storageBucket: "tusakay-school.appspot.com",
    messagingSenderId: "96410742214",
    appId: "1:96410742214:web:2a6020eef2474c206956c7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
