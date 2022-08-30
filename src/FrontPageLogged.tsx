import { query, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { fireStore, projectsInterface, storage } from './firebaseObjs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';

export default function FrontPageLogged() {
    const projRef = query(collection(fireStore, 'projects'));
    const [projects, setProjects] = useState([] as projectsInterface[]);

    const getProjects = async () => {
        const projects = await getDocs(projRef);
        const docs = projects.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id } as projectsInterface)
        );
        // setProjects(projects.docs.map(doc => ({...doc.data(), id: doc.id} as never)))
        const projectsWithImage = docs.map(async (doc) => {
            doc.image = await getDownloadURL(ref(storage, doc.image));
            return doc;
        });
        Promise.all(projectsWithImage).then((docs) => setProjects(docs));
    };
    getProjects();

    return (
        <div className=''>
            <div className=''>
                <img
                    src='https://i.pinimg.com/originals/68/a6/e0/68a6e0d38a46cd07501461643b484e6e.jpg'
                    alt='Home'
                    className='h-36 w-screen'
                />
            </div>
            <div
                className='grid grid-cols-5 gap-4 h-full w-full justify-center p-4'
                id='principal'>
                {projects.map((project) => {
                    return (
                        <>
                            <Project
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                profession={project.profession}
                                enterpriseUID={project.enterpriseUID}
                            />
                        </>
                    );
                })}
            </div>
        </div>
    );
}

function Project(props: projectsInterface) {
    return (
        <Link
            to={{
                pathname: `project/${props.id}`,
            }}
            state={{ data: props }}
            className='w-full'>
            <div className='flex flex-col my-1 items-center bg-neutral-900'>
                <img
                    src={props.image}
                    alt=''
                    className='object-cover w-52 h-40'
                />
                <div className='m-2'>
                    <p>{props.profession}</p>
                    <h3 className='text-2xl bold text-center'>{props.title}</h3>
                    <p className='overflow-hidden text-center'>
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
