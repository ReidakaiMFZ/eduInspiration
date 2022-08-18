import Header from './Header';
import FrontPage from './FrontPage';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<FrontPage />} />
                <Route path='/about' element={<AboutUs />} />
            </Routes>
        </>
    );
}

export default App;
