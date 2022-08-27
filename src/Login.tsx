import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import home from './assets/home.svg';
import {
    signInAnonymously,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fireStore } from './firebaseObjs';
import { UserData } from './user';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { async } from '@firebase/util';

const userInput = {
    login: '',
    password: '',
};
export default function Login() {
    let [homeButton, setHomeButton]: [JSX.Element | null, any] = useState(null);
    let [text, setText] = useState('');
    const [user] = useAuthState(auth);
    useEffect(() => {
        setTimeout(() => {
            setHomeButton(
                <Link
                    to={'/'}
                    className='absolute bottom-4 right-4 w-24 h-24 animate-fade-in'>
                    <img src={home} alt='Home' className='w-full h-full' />
                </Link>
            );
        }, 1000);
    }, []);
    return (
        <div className='min-h-full min-w-full flex justify-center flex-row animate-fade-in'>
            <div className='w-1/2g h-full mt-8 flex flex-col align-middle text-center bg-black py-8 px-24 text-xl'>
                <div className='flex flex-row-reverse gap-4'>
                    <div>
                        <label htmlFor='slcTipo'>
                            Selecione como quer logar:{' '}
                        </label>
                        <select
                            name='slcTipo'
                            id='slcTipo'
                            placeholder='Tipo de usuário'
                            className='bg-gblack w-1/3'>
                            <option value='0' disabled>
                                Tipo de usuário
                            </option>
                            <option value='1'>Aluno</option>
                            <option value='2'>Professor</option>
                            <option value='3'>Empresa</option>
                            <option value='4'>Escola</option>
                        </select>
                    </div>
                </div>
                <p className='text-bold underline text-4xl  mt-8 text-center'>
                    Login
                </p>
                <form
                    action=''
                    method='post'
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(userInput.login);
                        if (userInput.login == '' && userInput.password == '') {
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
                                        UserData.updateTypeUser(doc.data().type);
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
                            className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                            onChange={(e) => {
                                userInput.login = e.target.value;
                                console.log(e.target.value, userInput.login);
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
                            className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
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
                        to={'/forgotPassword'}
                        className={'underline text-2xl mt-0'}>
                        Esqueceu sua senha?
                    </Link>
                </form>
                <div className='flex flex-row-reverse mt-8'>
                    <Link
                        to={'/register'}
                        className={
                            'bg-gpink rounded-full flex items-center justify-center  w-1/3 h-16'
                        }>
                        Cadastrar-se
                    </Link>
                </div>
            </div>
            {user ? <Navigate to={'/'} /> : homeButton}
        </div>
    );
}
