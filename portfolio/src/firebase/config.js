import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4j2cY9OZnZfYs5Cu8HM252RcpmRrWi_k",
  authDomain: "portfolio-ad943.firebaseapp.com",
  projectId: "portfolio-ad943",
  storageBucket: "portfolio-ad943.appspot.com",
  messagingSenderId: "752211603737",
  appId: "1:752211603737:web:2bb72e2c9a888ea3e5d588",
};

//init firebase
const app = initializeApp(firebaseConfig);

//init firestore db
const db = getFirestore(app);

//init firebase auth
const auth = getAuth(app);

//init firebase storage
const storage = getStorage();

//init timestamp
const timestamp = Timestamp;

export { db, auth, storage, timestamp };
