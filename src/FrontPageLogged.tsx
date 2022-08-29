import { query, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { fireStore, storage } from './firebaseObjs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { async } from '@firebase/util';

export default function FrontPageLogged() {
    const projRef = query(collection(fireStore, 'projects'));
    const [projects, setProjects] = useState([] as interProject[]);

    const getProjects = async () => {
        const projects = await getDocs(projRef);
        const docs = projects.docs.map(
            (doc) => ({ ...doc.data(), id: doc.id } as interProject)
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
                className='h-3/4 w-screen flex items-baseline flex-wrap justify-center'
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

interface interProject {
    image: string;
    profession: string;
    title: string;
    description: string;
    enterpriseUID: string;
    id: string;
}

function Project(props: interProject) {
    return (
        <Link to={'/' + props.enterpriseUID}>
            <div className='flex flex-col w-1/5 mx-2 my-1 bg-neutral-900'>
                <img src={props.image} alt='' className='object-scale-down' />
                <div className='m-2'>
                    <p>{props.profession}</p>
                    <h3 className='text-2xl bold my-2'>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    );
}
