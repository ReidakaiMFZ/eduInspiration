import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fireStore } from './firebaseObjs';
import { UserData } from './user';
import { getCep } from './CepApi';
import { useRouter } from 'next/navigation';

export default function Enterprise() {
    const router = useRouter();
    const [user] = useAuthState(auth);
    let tempPassword = '';
    let password: string = '';
    const enterprise = {
        createdAt: serverTimestamp(),
        name: '',
        email: '',
        cnpj: '',
        phone: '',
        cep: '',
        state: '',
        address: '',
        addressNum: '',
        uid: '',
    };
    const registerEnterprise = (e: React.FormEvent) => {
        e.preventDefault();
        if (tempPassword !== password) {
            alert('As senhas não conferem');
            return;
        }
        createUserWithEmailAndPassword(auth, enterprise.email, password)
            .catch((e) =>
                alert(
                    e.message === 'auth/email-already-in-use'
                        ? 'Email já cadastrado'
                        : e.message === 'auth/invalid-email'
                        ? 'Email não é valido'
                        : e.message
                )
            )
            .then((result) => {
                if (result) {
                    enterprise.uid = result.user.uid;
                    UserData.updateUsername(enterprise.name);
                    UserData.updateTypeUser('enterprise');
                    addDoc(collection(fireStore, 'enterprises'), enterprise);
                    addDoc(collection(fireStore, 'users'), {
                        type: 'enterprise',
                        uid: result.user.uid,
                    });
                    updateProfile(result.user, {
                        displayName: enterprise.name,
                    }).catch((e) => alert(e));
                }
            });
    };
    const handlerCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const street = document.getElementById(
            'enterpriseStreet'
        ) as HTMLInputElement;
        const state = document.getElementById(
            'enterpriseState'
        ) as HTMLInputElement;

        getCep(e.target.value).then((cep) => {
            street.value = cep.logradouro;
            state.value = cep.localidade;
        });
    };
    return (
        <form
            action=''
            method='post'
            onSubmit={registerEnterprise}
            className={
                'flex flex-col gap-4 [&>div>input]:border [&>div>input]:border-black'
            }>
            <>
                <div className='text-left mt-8 text-2xl'>
                    <label htmlFor='enterpriseName'>Nome:</label>
                    <input
                        type='text'
                        name='enterpriseName'
                        id='enterpriseName'
                        className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                        onChange={(_) => (enterprise.name = _.target.value)}
                    />
                </div>
                {user ? router.push('/') : null}
            </>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseEmail'>Email:</label>
                <input
                    type='email'
                    name='enterpriseEmail'
                    id='enterpriseEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => (enterprise.email = _.target.value)}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseCnpj'>CNPJ:</label>
                <input
                    type='text'
                    name='enterpriseCnpj'
                    id='enterpriseCnpj'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => (enterprise.cnpj = _.target.value)}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='enterpriseTelephone'
                    id='enterpriseTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => (enterprise.phone = _.target.value)}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseCep'>CEP:</label>
                <input
                    type='text'
                    name='enterpriseCep'
                    id='enterpriseCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => {
                        enterprise.cep = _.target.value;
                        handlerCep(_);
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseState'>Estado:</label>
                <input
                    type='text'
                    name='enterpriseState'
                    id='enterpriseState'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => {
                        enterprise.state = _.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='enterpriseStreet'>Logradouro:</label>
                    <label htmlFor='enterpriseBuildNumber' className=''>
                        N°:
                    </label>
                </div>
                <br />
                <input
                    type='text'
                    name='enterpriseStreet'
                    id='enterpriseStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                    onChange={(_) => (enterprise.address = _.target.value)}
                />
                <input
                    type='text'
                    name='enterpriseBuildNumber'
                    id='enterpriseBuildNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                    onChange={(_) => (enterprise.addressNum = _.target.value)}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterprisePassword'>Senha:</label>
                <input
                    type='password'
                    name='enterprisePassword'
                    id='enterprisePassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(_) => (password = _.target.value)}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='enterpriseConfirmPassword'>
                    Confirmar senha:
                </label>
                <input
                    type='password'
                    name='enterpriseConfirmPassword'
                    id='enterpriseConfirmPassword'
                    onChange={(_) => (tempPassword = _.target.value)}
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                />
            </div>
            <button
                type='submit'
                className='bg-gpink rounded-full text-4xl px-24 mt-24 h-16 underline transition-all duration-300 '>
                Cadastrar
            </button>
        </form>
    );
}
