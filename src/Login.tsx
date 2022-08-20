import { Link } from 'react-router-dom';
export default function Login() {
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
                <p className='text-bold underline text-4xl text-left mt-8'>
                    Login
                </p>
                <form
                    action=''
                    method='post'
                    onSubmit={(_) => _.preventDefault()}
                    className={'flex flex-col gap-4'}>
                    <div className='text-left mt-8 text-2xl'>
                        <label htmlFor='login'>Login:</label>
                        <input
                            type='text'
                            name='login'
                            id='login'
                            className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                        />
                    </div>
                    <div className='text-left mt-8 text-2xl'>
                        <label htmlFor='senha'>Senha:</label>
                        <input
                            type='text'
                            name='senha'
                            id='senha'
                            className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                        />
                    </div>
                    <button
                        type='submit'
                        className='bg-gpink rounded-full text-5xl w-full mt-24 h-24 underline'>
                        Login
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
        </div>
    );
}
