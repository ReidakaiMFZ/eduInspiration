import {
    collection,
    query,
    serverTimestamp,
    getDocs,
} from 'firebase/firestore';
import escolas from '../assets/escolas.json';
import React, { SetStateAction, useEffect, useState } from 'react';
import { auth, fireStore, subjectsInterface } from './firebaseObjs';
import { addDoc } from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    updateCurrentUser,
    updateProfile,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { UserData } from './user';
import { getCep } from './CepApi';

export default function Student() {
    const router = useRouter();
    const [user] = useAuthState(auth);
    let tempPassword = '';
    let password: string = '';
    const student = {
        createdAt: serverTimestamp(),
        name: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        address: '',
        addressNum: '',
        field: 0,
        uid: '',
    };
    const registerStudent = (e: React.FormEvent) => {
        e.preventDefault();
        if (tempPassword !== password) {
            alert('As senhas não conferem');
            return;
        }

        createUserWithEmailAndPassword(auth, student.email, password)
            .catch((error) => {
                alert(
                    error.code === 'auth/email-already-in-use'
                        ? 'Email já cadastrado'
                        : error.code === 'auth/invalid-email'
                        ? 'Email não é valido'
                        : error.message
                );
            })
            .then((result) => {
                if (result) {
                    student.uid = result.user.uid;
                    UserData.updateUsername(student.name);
                    UserData.updateTypeUser('student');
                    addDoc(collection(fireStore, 'students'), student);
                    addDoc(collection(fireStore, 'users'), {
                        uid: result.user.uid,
                        type: 'student',
                    });
                    updateProfile(result.user, {
                        displayName: student.name,
                    }).catch((e) => alert(e));
                }
            });

        addDoc(collection(fireStore, 'students'), student);
    };
    const [subject, setSubject] = useState([] as subjectsInterface[]);
    const subjectsRef = query(collection(fireStore, 'subjects'));
    const getSubjects = async () => {
        const subjects = await getDocs(subjectsRef);
        setSubject(
            subjects.docs.map(
                (doc) => ({ ...doc.data(), id: doc.id } as subjectsInterface)
            )
        );
    };
    useEffect(() => {
        getSubjects();
    }, []);
    const handlerCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const street = document.getElementById(
            'studentStreet'
        ) as HTMLInputElement;
        const state = document.getElementById(
            'studentState'
        ) as HTMLInputElement;

        getCep(e.target.value).then((cep) => {
            console.log(cep);
            street.value = cep.logradouro;
            state.value = cep.localidade;
        });
    };
    return (
        <form
            action=''
            method='post'
            onSubmit={registerStudent}
            className='flex flex-col gap-4 [&>div>input]:border [&>div>input]:border-black [&>div>select]:bg-white'>
            <>
                <div className='text-left mt-8 text-2xl'>
                    <label htmlFor='studentName'>Nome:</label>
                    <input
                        type='text'
                        name='studentName'
                        id='studentName'
                        className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                        onChange={(e) => (student.name = e.target.value)}
                    />
                </div>
                {user ? router.push('/') : ''}
            </>

            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentEmail'>Email:</label>
                <input
                    type='email'
                    name='studentEmail'
                    id='studentEmail'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(e) => {
                        student.email = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentCpf'>CPF:</label>
                <input
                    type='text'
                    name='studentCpf'
                    id='studentCpf'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(e) => {
                        student.cpf = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentTelephone'>Telefone:</label>
                <input
                    type='text'
                    name='studentTelefone'
                    id='studentTelephone'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(e) => {
                        student.phone = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentCep'>CEP:</label>
                <input
                    type='text'
                    name='studentCep'
                    id='studentCep'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    pattern='[0-9]{8}'
                    onChange={(e) => {
                        handlerCep(e);
                        student.cep = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <div className='flex justify-between pr-8 -mb-8'>
                    <label htmlFor='studentStreet'>Logradouro:</label>
                    <label htmlFor='studentHouseNumber' className=''>
                        N°:
                    </label>
                </div>
                <br />
                <input
                    type='text'
                    name='studentStreet'
                    id='studentStreet'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-96 mr-5'
                    onChange={(e) => {
                        student.address = e.target.value;
                    }}
                />
                <input
                    type='text'
                    name='studentHouseNumber'
                    id='studentHouseNumber'
                    className='inline-block bg-transparent border border-white border-x-0 border-t-0 w-16'
                    onChange={(e) => {
                        student.addressNum = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentEssay'>Disciplina:</label>
                <select
                    name='essays'
                    id='essays'
                    placeholder='Disciplinas'
                    className='w-2/4'
                    onChange={(e) => {
                        student.field = parseInt(
                            e.target.options[e.target.options.selectedIndex]
                                .text
                        );
                    }}>
                    <option value='0' disabled>
                        Disciplinas
                    </option>
                    {subject.map((subject) => (
                        <option key={subject.id} value={subject.id}>
                            {subject.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentSchool'>Escola:</label>
                <select
                    name='schools'
                    id='schools'
                    placeholder='Escolas'
                    className='w-2/4'>
                    <option value='0'>Nenhuma</option>
                    {escolas.escolas.map((escola) => (
                        <option value={escola} key={escola}>
                            {escola}
                        </option>
                    ))}
                </select>
            </div>
            {/* <div className='text-left mt-8 text-2xl flex justify-between'>
                <label htmlFor='studentTeacher'>Professor orientador:</label>
                <select name="teachers" id="teachers" placeholder='Professores' className='bg-gblack w-2/4'>
                    <option value="0">Nenhum</option>
                </select>
            </div> */}
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentPassword'>Senha:</label>
                <input
                    type='password'
                    name='studentPassword'
                    id='studentPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    required
                    onChange={(e) => {
                        password = e.target.value;
                    }}
                />
            </div>
            <div className='text-left mt-8 text-2xl'>
                <label htmlFor='studentConfirmPassword'>Confirmar senha:</label>
                <input
                    type='password'
                    name='studentConfirmPassword'
                    id='studentConfirmPassword'
                    className='block bg-transparent border border-white border-x-0 border-t-0 mt-2 w-full'
                    onChange={(e) => (tempPassword = e.target.value)}
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
