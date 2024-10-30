import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD28V4paJ1EsF8zaMff0WP0PtuFBBmkyq4",
  authDomain: "netflixclone-9c83e.firebaseapp.com",
  projectId: "netflixclone-9c83e",
  storageBucket: "netflixclone-9c83e.appspot.com",
  messagingSenderId: "877334637695",
  appId: "1:877334637695:web:7a8729cf60a0c5833ae34a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
       const res =  await createUserWithEmailAndPassword(auth, email, password)

       const user = res.user

       await addDoc(collection(db, 'user'), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,

       });
    } catch (error) {
        console.log(error);
        alert(error);

    }
}

const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
        
 
       
     } catch (error) {
         console.log(error);
         alert(error);
 
     }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, logout, signup};