'use client';
import { Auth, signOut, updateCurrentUser } from 'firebase/auth';

import { User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseObjs';
import { UserData } from './user';
import logo from '../assets/logo.png';

import Link from 'next/link';

import Image from 'next/image';
export default function Header() {
    const [user] = useAuthState(auth);
    return (
        <>
            <header className='w-full p-2 h-18 flex flex-row items-center justify-between border-white border-b-2'>
                <Image src={logo} alt='Logo' className='w-1/12 h-full' />
                <section className='w-1/4 text-lg flex gap-8 flex-row justify-between flex-nowrap'>
                    <Link
                        href='/'
                        className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                        Home
                    </Link>
                    <Link
                        href={'/about/business'}
                        className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                        Empresas
                    </Link>
                    <Link
                        href={'/about/school'}
                        className='h-8 rounded underline hover:text-xl transition-all duration-500'>
                        Escolas
                    </Link>
                    <Link
                        href={'/about/us'}
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
                <Link href={'/newproject'}>Criar Projeto</Link>
            ) : null}
        </section>
    );
}

function UnLoggedHeader() {
    return (
        <section className='w-1/3 items-end text-lg flex gap-4 flex-row-reverse '>
            <Link
                href={'/login'}
                className='h-8 w-1/12 rounded underline hover:text-xl transition-all duration-500'>
                Login
            </Link>
        </section>
    );
}
