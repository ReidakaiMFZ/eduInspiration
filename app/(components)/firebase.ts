'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBiyzLGCS-NN_iE0P8GQyvLK-zE6XWHhHc',
    authDomain: 'prjproblematicas.firebaseapp.com',
    projectId: 'prjproblematicas',
    storageBucket: 'prjproblematicas.appspot.com',
    messagingSenderId: '194295484275',
    appId: '1:194295484275:web:2100cb6744a64493743f06',
    measurementId: 'G-Q0M9DT0SXN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
