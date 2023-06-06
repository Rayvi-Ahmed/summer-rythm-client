// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbCVTAwVFdVwm14QV46rmpHN6cwhfLBOk",
    authDomain: "auth-lab-1d89f.firebaseapp.com",
    projectId: "auth-lab-1d89f",
    storageBucket: "auth-lab-1d89f.appspot.com",
    messagingSenderId: "1041566989450",
    appId: "1:1041566989450:web:10d93a562a0ab7c6320173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app