import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Register from './Register';
import Login from './Login';
import ProjectView from './ProjectView';
import FrontPageLogged from './FrontPageLogged';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseObjs';

function App() {
    const [user] = useAuthState(auth);
    return (
        <main className='bg-gblack w-full h-full'>
            <Header />
            <Routes>
                <Route path='/' element={user ? <FrontPageLogged /> : <FrontPage/>} />

                <Route path='/about' element={<AboutUs />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/projectview' element={<ProjectView />} />
            </Routes>
        </main>
    );
}

export default App;
