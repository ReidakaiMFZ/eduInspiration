import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Register from './Register';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<FrontPage />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
