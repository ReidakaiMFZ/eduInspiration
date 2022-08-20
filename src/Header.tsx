import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <Routes>
            <Route path='/' element={<UnLoggedHeader />} />
        </Routes>
    );
}

function UnLoggedHeader() {
    return (
        <header className='w-full p-2 h-18 flex flex-row items-center justify-between'>
            <img src='#' alt='Logo' className='w-1/12 h-full' />
            <section className='w-1/6 text-lg flex gap-8 flex-row justify-between'>
                <Link
                    to={'/business'}
                    className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                    Empresas
                </Link>
                <Link
                    to={'/school'}
                    className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                    Escolas
                </Link>
                <Link
                    to={'/about'}
                    className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                    Sobre Nós
                </Link>
            </section>
            <section className='w-1/3 items-end text-lg flex gap-4 flex-row-reverse '>
                <Link
                    to={'/login'}
                    className='h-8 w-1/12 rounded underline hover:text-xl transition-all duration-500'>
                    Login
                </Link>
            </section>
        </header>
    );
}
