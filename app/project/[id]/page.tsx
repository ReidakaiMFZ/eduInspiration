'use client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { projectsInterface } from '@components/firebaseObjs';
export default function ProjectView() {
    const router = useRouter();

    const { data } = router.query as unknown as { data: projectsInterface };

    return (
        <div className='flex flex-nowrap flex-row items-stretch'>
            <nav className='grid h-96 w-1/2 justify-center'>
                <div className='flex justify-center mt-10'>
                    <Image src={data.image} alt='problema' className='' />
                </div>
            </nav>

            <div className='h-full w-1/2 flex flex-col gap-y-2 mt-8'>
                <h1 className='bold text-5xl'>{data.title}</h1>
                <h6 className='mt-2 mb-5'>{data.subject}</h6>
                <p className='break-all h-full'>{data.description}</p>
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
