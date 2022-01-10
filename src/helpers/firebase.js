import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgvqt9QjIZiHJJisJX3bRRb5yNjTI_KTo",
    authDomain: "fireblog-d61bf.firebaseapp.com",
    projectId: "fireblog-d61bf",
    storageBucket: "fireblog-d61bf.appspot.com",
    messagingSenderId: "920395586581",
    appId: "1:920395586581:web:a8fc1921ccc338e002021c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
