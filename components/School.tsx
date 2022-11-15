export default function School() {
    return (
        <form
            action=''
            method='post'
            onSubmit={(_) => _.preventDefault()}
            className={'flex flex-col gap-4'}>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolName'>Nome:</label>
                <input
                    type='text'
                    name='schoolName'
                    id='schoolName'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>

            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolEmail'>Email:</label>
                <input
                    type='email'
                    name='schoolEmail'
                    id='schoolEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolCnpj'>CNPJ:</label>
                <input
                    type='text'
                    name='schoolCnpj'
                    id='schoolCnpj'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='schoolTelephone'
                    id='schoolTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolCep'>CEP:</label>
                <input
                    type='text'
                    name='schoolCep'
                    id='schoolCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='schoolStreet'>Logradouro:</label>
                    <label htmlFor='schoolBuildNumber' className=''>
                        N°:
                    </label>
                </div>
                <br />
                <input
                    type='text'
                    name='schoolStreet'
                    id='schoolStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                />
                <input
                    type='text'
                    name='schoolBuildNumber'
                    id='schoolBuildNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolPassword'>Senha:</label>
                <input
                    type='password'
                    name='schoolPassword'
                    id='schoolPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='schoolConfirmPassword'>Confirmar senha:</label>
                <input
                    type='password'
                    name='schoolConfirmPassword'
                    id='schoolConfirmPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <button
                type='submit'
                className='bg-gpink rounded-full text-4xl px-24 mt-24 h-16 underline transition-all duration-300'>
                Cadastrar
            </button>
        </form>
    );
}
