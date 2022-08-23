import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Auth } from 'firebase/auth';
import { auth } from './firebaseObjs';
import * as firebase from 'firebase/app';

export default function FrontPage() {
    return (
        <div className='mt-20 min-h-max min-w-max flex flex-row animate-fade-in'>
            <div className='w-1/2 flex flex-col align-middle text-center'>
                <span className='font-bold inline-block text-gpink text-4xl'>
                    Prazer somos a
                </span>
                <span className='font-bold text-4xl inline-block'>
                    "Nome do projeto/grupo"
                </span>
                <p className='mt-12 text-2xl'>
                    Uma plataforma focada na resolução de problemas reais
                </p>
                <p className='mt-8 text-xl'>
                    Aqui você pode solucionar problemas reais de empresas, e
                    usar a ideia como tcc
                </p>
                <Link
                    to={'/register'}
                    className='mt-12 text-white text-2xl underline p-2 hover:text-3xl transition-all duration-500'>
                    Cadastre-se
                </Link>
            </div>
            <div className='w-1/2 px-36 '>
                <img src='#' alt='Foto' className='w-full h-full bg-gpink' />
            </div>
        </div>
    );
}
