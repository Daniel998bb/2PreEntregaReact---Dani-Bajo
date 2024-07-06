import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOFKRWuu7cXmD710yB2PYGomr8h2FxODg",
  authDomain: "proyecto-coder-react-3fcce.firebaseapp.com",
  projectId: "proyecto-coder-react-3fcce",
  storageBucket: "proyecto-coder-react-3fcce.appspot.com",
  messagingSenderId: "513614102222",
  appId: "1:513614102222:web:ca1bfc5f55949d245d5a9f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);