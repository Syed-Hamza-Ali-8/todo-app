import {
  getAuth,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';

import { app } from "./firebase.js";

window.addEventListener('resize', resize);

function resize() {
  const formImage = document.querySelector('.form__image');
  formImage.style.height = document.body.scrollHeight + 'px';
}

resize();

const auth = getAuth(app);

const login = document.getElementById("login");

login.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // Attempt to sign in user
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User logged in:", user);

    // Redirect to homepage after successful login
    location.href = "index.html";

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    // Handle errors
    if (errorCode === 'auth/invalid-credential') {
      alert("Invalid Credentials or User not registered yet");
    }
  }
});
