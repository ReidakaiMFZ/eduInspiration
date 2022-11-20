'use client';
import Link from 'next/link';
import handshake from '../assets/handshake.jpg';
import Image from 'next/image';
import { auth } from '../components/firebaseObjs';
import { UserData } from '../components/user';
import { query, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import cover from '../assets/cover.jpg';
import {
    fireStore,
    projectsInterface,
    storage,
} from '../components/firebaseObjs';
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { getSubjects } from '../components/getSubjects';
import ReactLoading from 'react-loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { logged } from '../components/user';
import browserStore from '@/components/browserStorage';
export default function Main() {
    const [user, loading, error] = useAuthState(auth);

    return <>{user ? <FrontPageLogged /> : <FrontPage />}</>;
}

function FrontPage() {
    const router = useRouter();
    const data = UserData.useUserData();
    useEffect(() => {
        if (data.type == 'nan' && browserStore('get', 'type')) {
            UserData.updateTypeUser(browserStore('get', 'type') as logged);
            UserData.updateUid(browserStore('get', 'uid') as string);
        }
    }, []);
    return (
        <div className='mt-20 min-h-max min-w-max flex flex-row animate-fade-in'>
            <div className='w-1/2 flex flex-col align-middle text-center'>
                <span className='font-bold inline-block text-gpink text-4xl'>
                    Prazer somos a
                </span>
                <span className='font-bold text-4xl inline-block'>
                    Edu Inspiration
                </span>
                <p className='mt-12 text-2xl'>
                    Uma plataforma focada na resolução de problemas reais
                </p>
                <p className='mt-8 text-xl'>
                    Aqui você pode solucionar problemas reais de empresas, e
                    usar a ideia como tcc
                </p>
                <Link
                    href={'/register'}
                    className='mt-12 text-2xl underline p-2 hover:text-3xl transition-all duration-500'>
                    Cadastre-se
                </Link>
            </div>
            <div className='w-1/2 px-36 '>
                <Image
                    src={handshake}
                    alt='Foto'
                    className='w-full h-full bg-gpink rounded-3xl'
                />
            </div>
        </div>
    );
}
function FrontPageLogged() {
    const projRef = query(collection(fireStore, 'projects'));
    const [projects, setProjects] = useState([] as projectsInterface[]);
    const [loading, setLoading] = useState(true);
    const getProjects = async (projeto?: string) => {
        if (projeto) {
            const project = await getDoc(doc(fireStore, 'projects', projeto));
            const document = {
                ...(project.data() as object),
                id: project.id,
            } as projectsInterface;
            document.image = await getDownloadURL(ref(storage, document.image));
            setProjects([document]);
            setLoading(false);
        } else {
            const projects = await getDocs(projRef);
            const docs = projects.docs.map(
                (doc) => ({ ...doc.data(), id: doc.id } as projectsInterface)
            );
            const projectsWithImage = docs.map(async (doc) => {
                doc.image = await getDownloadURL(ref(storage, doc.image));
                return doc;
            });
            Promise.all(projectsWithImage).then((docs) => setProjects(docs));
            setLoading(false);
        }
    };
    const principal = document.getElementById('principal') as HTMLDivElement;
    useEffect(() => {
        if (browserStore('get', 'projeto')) {
            getProjects(browserStore('get', 'projeto') as string);
        } else getProjects();
    }, []);

    return (
        <div className=''>
            {/* <div className=''>
                <Image src={cover} alt='Home' className='h-36 w-screen' />
            </div> */}
            {loading ? (
                <div className='flex justify-center items-center h-max mt-32'>
                    <ReactLoading type='spin' color='#901636' />
                </div>
            ) : (
                <div
                    className='grid grid-cols-5 gap-4 h-full w-full justify-center p-4'
                    id='principal'>
                    {projects.map((project, index) => {
                        return (
                            <>
                                <Project
                                    key={index}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    subject={project.subject}
                                    enterpriseUID={project.enterpriseUID}
                                />
                            </>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

function Project(props: projectsInterface) {
    const [subject, setSubject] = useState('');
    useEffect(() => {
        if (props.subject !== undefined) {
            getSubjects(props.subject).then((e) => {
                if (e !== undefined) setSubject(e.name);
            });
        }
    }, [props.subject]);
    return (
        <Link
            href={{
                pathname: `project/${props.id}`,
                query: {
                    data: JSON.stringify(props),
                },
            }}
            // state={{ data: props }}
            className='w-full'>
            <div className='flex flex-col my-1 items-center bg-gpink bg-opacity-80 border-2 border-black text-gblack h-96 rounded-lg'>
                <Image
                    src={props.image}
                    alt=''
                    className='object-cover w-52 h-40 mt-3'
                    width={208}
                    height={160}
                />
                <div className='m-2'>
                    {subject !== '' ? (
                        <span className='bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900'>
                            {subject}
                        </span>
                    ) : null}
                    <h3 className='text-2xl bold text-center p-1 h-16 line-clamp-2'>
                        {props.title}
                    </h3>
                    <p className='text-justify line-clamp-3'>
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
