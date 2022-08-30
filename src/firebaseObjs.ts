import * as firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
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
const fireStore = getFirestore(app);
const storage = getStorage(app);
export interface projectsInterface {
    image: string;
    profession: string;
    title: string;
    description: string;
    enterpriseUID: string;
    id: string;
}
export interface subjectsInterface {
    id: string;
    name: string;
}

export { app, analytics, auth, fireStore, storage };
