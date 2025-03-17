import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBYGgWXVUJlih4AH96SZzi5aq-OVl5Efag",
authDomain: "app-react-53730.firebaseapp.com",
projectId: "app-react-53730",
storageBucket: "app-react-53730.firebasestorage.app",
messagingSenderId: "731351397611",
appId: "1:731351397611:web:954a51d895310b11ffbaae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta Firestore y las funciones necesarias
export { db, collection, getDocs, doc, getDoc, addDoc };