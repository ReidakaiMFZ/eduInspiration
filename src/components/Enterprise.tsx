export default function Enterprise() {  
    return(
        <form action='' method='post' onSubmit={(_) => _.preventDefault()} className={'flex flex-col gap-4'}>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseName'>Nome:</label>
                <input
                    type='text'
                    name='enterpriseName'
                    id='enterpriseName'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>

            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseEmail'>Email:</label>
                <input
                    type='email'
                    name='enterpriseEmail'
                    id='enterpriseEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseCnpj'>CNPJ:</label>
                <input
                    type='text'
                    name='enterpriseCnpj'
                    id='enterpriseCnpj'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='enterpriseTelephone'
                    id='enterpriseTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseCep'>CEP:</label>
                <input
                    type='text'
                    name='enterpriseCep'
                    id='enterpriseCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='enterpriseStreet'>Logradouro:</label>
                    <label htmlFor='enterpriseBuildNumber' className=''>N°:</label>
                </div>
                <br />
                <input
                    type='text'
                    name='enterpriseStreet'
                    id='enterpriseStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                />
                <input
                    type='text'
                    name='enterpriseBuildNumber'
                    id='enterpriseBuildNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterprisePassword'>Senha:</label>
                <input
                    type='password'
                    name='enterprisePassword'
                    id='enterprisePassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseConfirmPassword'>Confirmar senha:</label>
                <input
                    type='password'
                    name='enterpriseConfirmPassword'
                    id='enterpriseConfirmPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'/>
            </div>
            <button type='submit' className='bg-gpink rounded-full text-5xl w-full mt-24 h-24 underline'>Cadastrar</button>
        </form>
    )
}