import Header from './Header';
import OneProject from './OneProject';
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
import ReactLoading from 'react-loading';

function App() {
    const [user, loading, error] = useAuthState(auth);
    const data = UserData.useUserData();
    useEffect(() => {
        if (data.type == 'nan' && localStorage.getItem('type')) {
            UserData.updateTypeUser(localStorage.getItem('type') as logged);
        }
    }, []);
    return (
        <>
            {!loading ? (
                <>
                    <main className='bg-gblack w-full h-full'>
                        <Header />
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    user ? <FrontPageLogged /> : <FrontPage />
                                }
                            />
                            <Route
                                path='/newproject'
                                element={<CreateNewProject />}
                            />
                            <Route path='/about/:who' element={<AboutUs />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route
                                path='project/:id'
                                element={<ProjectView />}
                            />
                            <Route
                                path='/createProject'
                                element={<CreateNewProject />}
                            />
                            <Route
                                path='/OneProject'
                                element={<OneProject />}
                            />
                        </Routes>
                    </main>
                </>
            ) : (
                <div className='flex justify-center items-center h-screen'>
                    <ReactLoading type='spin' color='purple' />
                </div>
            )}
        </>
    );
}

export default App;
