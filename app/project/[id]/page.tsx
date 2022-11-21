'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from 'firebase/firestore';
import {
    auth,
    fireStore,
    projectsInterface,
} from '../../../components/firebaseObjs';
import { UserData } from '@/components/user';
import browserStore from '@/components/browserStorage';
export default function ProjectView() {
    const router = useRouter();
    const parameters = useSearchParams();
    const data = parameters.get('data');
    const project: projectsInterface = JSON.parse(data as string);
    const user = UserData.useUserData();
    const deleteProject = async () => {
        await deleteDoc(doc(fireStore, 'projects', project.id));
        // update all students with that project
        const q = query(
            collection(fireStore, 'students'),
            where('project', '==', project.id)
        );
        const docs = await getDocs(q);
        docs.forEach(async (document) => {
            updateDoc(doc(fireStore, 'students', document.id), {
                project: '',
            });
        });
        router.push('/');
    };
    const casar = async () => {
        if (
            confirm(
                'Tem a certeza que quer casar com esse projeto (essa ação só poderá ser revertida após contato com a empresa)?'
            )
        ) {
            await UserData.updateProjeto(project.id, auth.currentUser?.uid);
            router.push('/');
        }
    };
    const divorciar = async () => {
        if (
            confirm(
                'Tem a certeza que quer divorciar desse projeto (essa ação só poderá ser revertida após contato com a empresa)?'
            )
        ) {
            await UserData.updateProjeto('', auth.currentUser?.uid);
            router.push('/');
        }
    };
    return (
        <div className='flex flex-nowrap flex-row items-stretch'>
            <nav className='grid h-96 w-1/2 justify-center'>
                <div className='flex justify-center mt-10'>
                    <Image
                        src={project.image}
                        alt='problema'
                        className='w-96 h-96'
                        width={200}
                        height={200}
                    />
                </div>
            </nav>

            <div className='h-full w-1/2 flex flex-col gap-y-2 mt-8'>
                <h1 className='bold text-5xl'>{project.title}</h1>
                <h6 className='mt-2 mb-5'>{project.subject}</h6>
                <p className='break-all h-full'>{project.description}</p>
                <div className='flex flex-row-reverse mb-10 mr-10'>
                    {UserData.useUserData().type == 'student' && (
                        <button
                            className='bg-gpink w-64 h-16 mt-8 rounded-lg'
                            onClick={
                                browserStore('get', 'projeto')
                                    ? divorciar
                                    : casar
                            }>
                            {browserStore('get', 'projeto')
                                ? 'Divorciar do Projeto'
                                : 'Casar com o projeto'}
                        </button>
                    )}

                    {user.type == 'enterprise' &&
                        auth.currentUser?.uid === project.enterpriseUID && (
                            <button
                                className='bg-gpink w-64 h-16 mt-8 rounded-lg'
                                onClick={deleteProject}>
                                Excluir Projeto
                            </button>
                        )}
                </div>
            </div>
        </div>
    );
}
