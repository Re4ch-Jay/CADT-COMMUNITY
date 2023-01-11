import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB3K9YAtu5WunFABQ4yju0xUP6C6IBdW1o",
  authDomain: "cadt-community.firebaseapp.com",
  projectId: "cadt-community",
  storageBucket: "cadt-community.appspot.com",
  messagingSenderId: "724289254473",
  appId: "1:724289254473:web:33080bf936f9e3fc54bb98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()

