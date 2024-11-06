import {
    getAuth,
    createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

import { app, db } from "./firebase.js";

window.addEventListener('resize', resize);

function resize() {
    const formImage = document.querySelector('.form__image');
    formImage.style.height = document.body.scrollHeight + 'px';
}

resize();

const auth = getAuth(app);

const signup = document.getElementById("signup");

signup.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert("Registration successful! Please log in.");
        await setDoc(doc(db, "users", user.uid), {
            email,
        });



    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
            alert("Email already exists");
        }
        else if (errorCode === 'auth/weak-password') {
            alert("Password should be at least six characters");
        }
        else if (errorCode === 'auth/invalid-email') {
            alert("Invalid email format");
        }
    }
});
