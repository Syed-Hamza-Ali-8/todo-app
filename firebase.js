import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyApoN-4-sYNvI02W33S-1MgZQi5tiQmdMQ",
  authDomain: "todo-list-795e8.firebaseapp.com",
  projectId: "todo-list-795e8",
  storageBucket: "todo-list-795e8.appspot.com",
  messagingSenderId: "544228526923",
  appId: "1:544228526923:web:4b77439fb9c2e8fb0136ce",
  measurementId: "G-FW4N77JW73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };