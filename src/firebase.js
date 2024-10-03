import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgLxQwkAR1mv37Y5rNS7oPGkR9WD7yAZM",
    authDomain: "investment-guidance-ab05b.firebaseapp.com",
    projectId: "investment-guidance-ab05b",
    storageBucket: "investment-guidance-ab05b.appspot.com",
    messagingSenderId: "747241275158",
    appId: "1:747241275158:web:92613d3d638d1709519a37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };