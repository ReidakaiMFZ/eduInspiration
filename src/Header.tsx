import { Auth, signOut, updateCurrentUser } from 'firebase/auth';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseObjs';
import { UserData } from './user';
export default function Header() {
    const [user] = useAuthState(auth);
    return (
        <>
            <header className='w-full p-2 h-18 flex flex-row items-center justify-between border-white border-b-2'>
                <img
                    src='https://via.placeholder.com/140x100'
                    alt='Logo'
                    className='w-1/12 h-full'
                />
                <section className='w-1/6 text-lg flex gap-8 flex-row justify-between flex-nowrap'>
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
                {user ? <LoggedHeader /> : <UnLoggedHeader />}
            </header>
        </>
    );
}

function LoggedHeader() {
    const userState = UserData.useUserData();
    const [user] = useAuthState(auth);
    return (
        <section className='w-1/2 items-end text-lg flex gap-4 flex-row-reverse'>
            <p className={'h-8 rounded'}>
                {(user?.displayName || userState.username || 'Anonimo') +
                    ' - ' +
                    userState.type}
            </p>
            <p
                onClick={() => UserData.signOutWithState()}
                className={
                    'h-8 rounded underline hover:text-xl transition-all duration-500'
                }>
                Sair
            </p>
            {userState.type === 'enterprise' ? (
                <Link to={'/newproject'}>Criar Projeto</Link>
            ) : null}
        </section>
    );
}

function UnLoggedHeader() {
    return (
        <section className='w-1/3 items-end text-lg flex gap-4 flex-row-reverse '>
            <Link
                to={'/login'}
                className='h-8 w-1/12 rounded underline hover:text-xl transition-all duration-500'>
                Login
            </Link>
        </section>
    );
}
