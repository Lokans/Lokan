// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAacID1SU04h1ExfqPhL9CRYMuP-fG5UV4",
  authDomain: "lokandz.firebaseapp.com",
  projectId: "lokandz",
  storageBucket: "lokandz.firebasestorage.app",
  messagingSenderId: "348259604852",
  appId: "1:348259604852:web:a720c4ec412da4aab5f421",
  measurementId: "G-Z4XVWH2QM7"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Swal.fire({
                title: 'welcome',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'info.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error',
                
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
}

// Sign Up function
function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Update display name after sign up
            const user = userCredential.user;
            const username = document.getElementById('username').value; 
            // Assuming you have an input field for username
            return user.updateProfile({
                displayName: username
            });
        })
        .then(() => {
            Swal.fire({
                title: 'Welcome',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'info.html';
            });
        })
        .catch((error) => {
            Swal.fire({
                title: 'Error',
                
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
}

// Profile and Logout function
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // Display username and email
        document.getElementById('user-username').textContent = user.displayName || 'Unknown';
        document.getElementById('user-email').textContent = user.email;
    } else {
        // If no user is signed in, redirect to login page
        if (window.location.pathname.includes('info.html')) {
            window.location.href = 'Vvvv.html';
        }
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        // Redirect to login page after successful logout
        window.location.href = 'Vvvv.html';
    }).catch((error) => {
        Swal.fire({
            title: 'Error',
            
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    });
}