import Header from './Header';
import { Link, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<AboutUs />} />
            </Routes>
        </>
    );
}

export default App;
