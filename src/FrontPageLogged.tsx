import { query, collection, getDocs } from 'firebase/firestore';
import { fireStore, storage } from './firebaseObjs';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ref } from 'firebase/storage';



export default function FrontPageLogged(){
    const projRef = query(collection(fireStore, 'projects'))
    const [projects, setProjects] = useState([]);
    
        const getProjects = async () =>{
            const projects = await getDocs(projRef)
            setProjects(projects.docs.map(doc => ({...doc.data(), id: doc.id} as never)))
        }
        getProjects()
    
        
    return(
        <div className="">
                <div className="">
                    <img src='https://i.pinimg.com/originals/68/a6/e0/68a6e0d38a46cd07501461643b484e6e.jpg' alt='Home' className='h-36 w-screen' />
                </div>
            <div className="h-3/4 w-screen flex items-baseline flex-wrap justify-center" id='principal'>
                {
                    projects.map(project =>{
                        return (
                            <>
                                <Project
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    profission = {project.profission}
                                    enterpriseUID = {project.enterpriseUID}

                                />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

interface interProject{
    image: string;
    profission: string;
    title: string;
    description: string;
    enterpriseUID: string;

}

function Project(props: interProject){
    return(
        <Link to={"/"+ props.enterpriseUID}>
            <div className="flex flex-col w-1/5 mx-2 my-1 bg-neutral-900">
                <img src={props.image} alt='' className='object-scale-down' />
                <div className="m-2">
                    <p>{props.profission}</p>
                    <h3 className="text-2xl bold my-2">{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    )
}