import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAJDoMCwXaPkhsORYY3wjOdl4kQey7ydzw",
  authDomain: "netflix-clone-fa57e.firebaseapp.com",
  projectId: "netflix-clone-fa57e",
  storageBucket: "netflix-clone-fa57e.firebasestorage.app",
  messagingSenderId: "577846867627",
  appId: "1:577846867627:web:c02d65c20ff1cf2f2669ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth , email , password);
        const user = response.user;
        await addDoc(collection(db , "user") ,{
            uid : user.uid,
            name ,
            authProvider : "local" ,
            email,
        });
    } 
    catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login =async (email , password) => {
    try {
        await signInWithEmailAndPassword(auth , email , password);

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth , db , login , signup , logout};
