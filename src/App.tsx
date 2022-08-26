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
import { userData } from './user';
import { useEffect } from 'react';
import {
    collection,
    Firestore,
    getDocs,
    query,
    where,
} from 'firebase/firestore';

function App() {
    const [user] = useAuthState(auth);
    const UserData = userData.useState((s) => s);
    useEffect(() => {
        const a = async () => {
            if (!user?.isAnonymous && UserData.type === 'nan') {
                const q = query(
                    collection(fireStore, 'users'),
                    where('uid', '==', user?.uid)
                );
                const resultado = await getDocs(q);
                resultado.forEach(async (doc) => {
                    userData.update((s) => {
                        s.type = doc.data().type;
                        s.username = user?.displayName || '';
                    });
                });
            }
        };
        a();
    }, []);
    return (
        <main className='bg-gblack w-full h-full'>
            <Header />
            <Routes>
                <Route
                    path='/'
                    element={user ? <FrontPageLogged /> : <FrontPage />}
                />
                <Route path='/newproject' element={<CreateNewProject />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/projectview' element={<ProjectView />} />
                <Route path='/:id' element={<ProjectView />} />
                <Route path='/createProject' element={<CreateNewProject />} />
            </Routes>
        </main>
    );
}

export default App;
