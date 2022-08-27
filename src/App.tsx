import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Register from './Register';
import Login from './Login';
import ProjectView from './ProjectView';
import FrontPageLogged from './FrontPageLogged';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fireStore } from './firebaseObjs';
import CreateNewProject from './CreateNewProject';
import { logged, UserData } from './user';
import { useEffect } from 'react';
import {
    collection,
    Firestore,
    getDocs,
    query,
    where,
} from 'firebase/firestore';

function App() {
    const [user, loading, error] = useAuthState(auth);
    const userData = UserData.useUserData();
    useEffect(() => {
        if (userData.type == 'nan' && localStorage.getItem('type')) {
            UserData.updateTypeUser(localStorage.getItem('type') as logged);
        }
    }, []);
    return (
        <>
            {!loading ? (
                <main className='bg-gblack w-full h-full'>
                    <Header />
                    <Routes>
                        <Route
                            path='/'
                            element={user ? <FrontPageLogged /> : <FrontPage />}
                        />
                        <Route
                            path='/newproject'
                            element={<CreateNewProject />}
                        />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/:id' element={<ProjectView />} />
                        <Route
                            path='/createProject'
                            element={<CreateNewProject />}
                        />
                    </Routes>
                </main>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
}

export default App;
