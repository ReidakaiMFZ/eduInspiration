export default function Teacher() {  
    return(
        <form action='' method='post' onSubmit={(_) => _.preventDefault()} className={'flex flex-col gap-4'}>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='ProfessorName'>Nome:</label>
                <input
                    type='text'
                    name='ProfessorName'
                    id='ProfessorName'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>

            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorEmail'>Email:</label>
                <input
                    type='email'
                    name='professorEmail'
                    id='professorEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorCpf'>CPF:</label>
                <input
                    type='text'
                    name='professorCpf'
                    id='professorCpf'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='professorTelefone'
                    id='professorTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorCep'>CEP:</label>
                <input
                    type='text'
                    name='professorCep'
                    id='professorCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='ProfessorStreet'>Logradouro:</label>
                    <label htmlFor='professorHouseNumber' className=''>N°:</label>
                </div>
                <br />
                <input
                    type='text'
                    name='ProfessorStreet'
                    id='ProfessorStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                />
                <input
                    type='text'
                    name='professorHouseNumber'
                    id='professorHouseNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                />
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='teacherSchool'>Escola:</label>
                <select name="schools" id="schools" placeholder='Escolas' className='bg-gblack w-2/4'>
                    <option value="0">nenhuma</option>
                </select>
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorPassword'>Senha:</label>
                <input
                    type='password'
                    name='professorPassword'
                    id='professorPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='professorConfirmPassword'>Confirmar senha:</label>
                <input
                    type='password'
                    name='professorConfirmPassword'
                    id='professorConfirmPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'/>
            </div>
            <button type='submit' className='bg-gpink rounded-full text-4xl px-24 mt-24 h-16 underline transition-all duration-300'>
                Cadastrar
            </button>
        </form>
    )
}