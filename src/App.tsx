import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Register from './Register';
import Login from './Login';
import { initializeApp } from 'firebase/app';
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
const app = initializeApp(firebaseConfig);

function App() {
    return (
        <main className='bg-gblack w-full h-full'>
            <Header />
            <Routes>
                <Route path='/' element={<FrontPage />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
    );
}

export default App;
