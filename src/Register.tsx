import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Student from './components/Student';
import Teacher from './components/Teacher';
import School from './components/School';
import Enterprise from './components/Enterprise';
import home from './assets/home.svg';

export default function Login() {
    const [Escolha, setEscolha] = useState(1);
    let [homeButton, setHomeButton]: [JSX.Element | null, any] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setHomeButton(
                <Link
                    to={'/'}
                    className='fixed bottom-4 right-4 w-24 h-24 animate-fade-in'>
                    <img src={home} alt='Home' className='w-full h-full' />
                </Link>
            );
        }, 1000);
    }, []);
    var handlerEscolha = (e: any) => {
        setEscolha(e.target.value);
    };
    return (
        <div className='min-h-full min-w-full flex justify-center flex-row animate-fade-in'>
            <div className='w-1/2g h-full mt-8 flex flex-col align-middle text-center bg-black py-8 px-24 text-xl'>
                <div className='flex flex-row-reverse gap-4'>
                    <div>
                        <label htmlFor='slcTipo'>
                            Selecione como quer Cadastrar-se:{' '}
                        </label>
                        <select
                            name='slcTipo'
                            id='slcTipo'
                            placeholder='Tipo de usuário'
                            className='bg-gblack w-1/3'
                            onChange={handlerEscolha}>
                            <option value='0' disabled>
                                Tipo de usuário
                            </option>
                            <option value='1'>Aluno</option>
                            <option value='2' disabled>
                                Professor/WIP
                            </option>
                            <option value='3'>Empresa</option>
                            <option value='4' disabled>
                                Escola/WIP
                            </option>
                        </select>
                    </div>
                </div>
                <p className='text-bold underline text-4xl text-left mt-8'>
                    Cadastro
                </p>
                {Escolha == 1 ? (
                    <Student />
                ) : Escolha == 2 ? (
                    <Teacher />
                ) : Escolha == 3 ? (
                    <Enterprise />
                ) : Escolha == 4 ? (
                    <School />
                ) : null}
                <div className='flex flex-row-reverse mt-8'>
                    <Link
                        to={'/login'}
                        className={
                            'bg-gpink rounded-full flex items-center justify-center  w-1/3 h-16'
                        }>
                        Conectar-se
                    </Link>
                </div>
            </div>
            {homeButton || ''}
        </div>
    );
}
