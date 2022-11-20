'use client';
import { useState } from 'react';
import Link from 'next/link';
import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fireStore } from '../../../components/firebaseObjs';
import { UserData } from '../../../components/user';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const userInput = {
    login: '',
    password: '',
};
export default function Login() {
    let [text, setText] = useState('');
    const [user] = useAuthState(auth);
    const router = useRouter();
    console.log(router);
    return (
        <div className='min-h-full min-w-full flex justify-center flex-row animate-fade-in'>
            <>
                <div className='w-1/2g h-full mt-8 flex flex-col align-middle text-center py-8 px-24 text-xl'>
                    <p className='text-bold underline text-4xl  mt-8 text-center'>
                        Login
                    </p>
                    <form
                        action=''
                        method='post'
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(userInput.login);
                            if (
                                userInput.login == '' &&
                                userInput.password == ''
                            ) {
                                signInAnonymously(auth);
                            } else if (
                                userInput.login != '' &&
                                userInput.password != ''
                            ) {
                                signInWithEmailAndPassword(
                                    auth,
                                    userInput.login,
                                    userInput.password
                                )
                                    .then(async (result) => {
                                        const q = query(
                                            collection(fireStore, 'users'),
                                            where('uid', '==', result.user.uid)
                                        );
                                        const resultado = await getDocs(q);
                                        resultado.forEach(async (doc) => {
                                            UserData.updateTypeUser(
                                                doc.data().type
                                            );
                                        });
                                    })
                                    .catch((error) => {
                                        alert(error.message);
                                    });
                            } else {
                                alert('Preencha todos os campos');
                            }
                        }}
                        className={'flex flex-col gap-4 items-center'}>
                        <div className='text-left mt-8 text-2xl'>
                            <label htmlFor='login'>Login:</label>
                            <input
                                type='text'
                                name='login'
                                id='login'
                                className='block bg-transparent border border-black mt-2 w-full'
                                onChange={(e) => {
                                    userInput.login = e.target.value;
                                    console.log(
                                        e.target.value,
                                        userInput.login,
                                        router
                                    );
                                    setText(e.target.value);
                                }}
                            />
                        </div>
                        <div className='text-left mt-8 text-2xl'>
                            <label htmlFor='senha'>Senha:</label>
                            <input
                                type='password'
                                name='senha'
                                id='senha'
                                className='block bg-transparent border border-black mt-2 w-full'
                                onChange={(e) => {
                                    userInput.password = e.target.value;
                                    setText(e.target.value);
                                }}
                            />
                        </div>
                        <button
                            type='submit'
                            className='bg-gpink rounded-full text-4xl px-24 mt-24 h-16 underline transition-all duration-300'>
                            {text ? 'Login' : 'Entrar Anonimamente'}
                        </button>
                        <Link
                            href={'/forgotPassword'}
                            className={'underline text-2xl mt-0'}>
                            Esqueceu sua senha?
                        </Link>
                    </form>
                    <div className='flex flex-row-reverse mt-8'>
                        <Link
                            href={'/register'}
                            className={
                                'bg-gpink rounded-full flex items-center justify-center  w-1/2 h-16'
                            }>
                            Cadastrar-se
                        </Link>
                    </div>
                </div>
                {user ? router.push('/') : ''}
            </>
        </div>
    );
}
