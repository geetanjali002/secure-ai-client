import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_dydf_5tq-ogrFzOJzknNHHn9Zo02JIE",
  authDomain: "ai-a541c.firebaseapp.com",
  projectId: "ai-a541c",
  storageBucket: "ai-a541c.firebasestorage.app",
  messagingSenderId: "749023398103",
  appId: "1:749023398103:web:935e8766b2d6ad040e8892",
  measurementId: "G-TC8X0QB18X"
};


  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

export {auth , app , googleProvider , fireDB , storage }