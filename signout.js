import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';
import { app } from './firebase.js';

const auth = getAuth(app);
const logoutButton = document.getElementById('logout');

window.history.pushState(null, '', window.location.href);
window.onpopstate = function () {
    window.history.pushState(null, '', window.location.href);
};

auth.onAuthStateChanged(user => {
    if (!user) {
        location.href = 'login.html';
    }
});

logoutButton.addEventListener('click', async () => {
    try {
        await signOut(auth);
        location.href = 'login.html';
    } catch (error) {
        console.error('Error signing out:', error.message);
    }
});
