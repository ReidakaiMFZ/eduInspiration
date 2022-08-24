import { useAuthState } from 'react-firebase-hooks/auth';
import * as firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    // cspell:disable
    apiKey: 'AIzaSyBiyzLGCS-NN_iE0P8GQyvLK-zE6XWHhHc',
    authDomain: 'prjproblematicas.firebaseapp.com',
    projectId: 'prjproblematicas',
    storageBucket: 'prjproblematicas.appspot.com',
    messagingSenderId: '194295484275',
    appId: '1:194295484275:web:3a67137d7b99ad39743f06',
    measurementId: 'G-J224GBDNSD',
}; // cSpell:enable
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
