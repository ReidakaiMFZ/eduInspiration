import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Register from './Register';
import Login from './Login';

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
