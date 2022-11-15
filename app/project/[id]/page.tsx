'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { projectsInterface } from '../../../components/firebaseObjs';
export default function ProjectView() {
    const router = useRouter();
    const parameters = useSearchParams();
    const data = parameters.get('data');
    console.log(data, 'data');
    const project: projectsInterface = JSON.parse(data as string);
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
                    <button
                        type='submit'
                        className='bg-gpink w-64 h-16 mt-8 rounded-lg'>
                        Casar com o projeto
                    </button>
                </div>
            </div>
        </div>
    );
}
