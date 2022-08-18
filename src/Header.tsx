import hamburger from './assets/hamburger-menu.svg';
import { Route, Routes } from 'react-router';
export default function Header() {
    return (
        <Routes>
            <Route path='/' element={<UnLoggedHeader />} />
        </Routes>
    );
}

function UnLoggedHeader() {
    return (
        <header className='w-full bg-slate-600 p-2 h-18 flex flex-row items-center justify-between'>
            <button>
                <img src={hamburger} alt={'Menu'} className='w-16' />
            </button>
            <section className='w-full items-end flex gap-4 flex-row-reverse'>
                <button className='bg-black h-8 w-1/12 text-white font-bold rounded'>
                    Cadastro
                </button>

                <button className='bg-white h-8 w-1/12 font-bold rounded'>
                    Login
                </button>
            </section>
        </header>
    );
}
