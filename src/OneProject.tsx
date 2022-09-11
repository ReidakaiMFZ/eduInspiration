import React from 'react'
import './index.css'

export default function OneProject() {
  return (
    <div className='h-screen w-screen'>
      <div className='block'>
          <img
            src='https://i.pinimg.com/originals/68/a6/e0/68a6e0d38a46cd07501461643b484e6e.jpg'
            alt='Home'
            className='h-36 w-screen'
          />
      </div>
      <div className='h-full w-full bg-gblack flex justify-center'id='principal'>
        <div className='flex flex-col my-1 items-start bg-neutral-900 w-1/2 h-1/2 m-10 mt-10'>
          <img
            // src={props.image}
            alt=''className='object-cover w-full h-40'/>
          <div className='m-2'>
            <p>Curso/profissão</p>
            <h3 className='text-2xl bold'>Nome da problemática</h3>
            <p className='overflow-hidden'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, nisi provident perspiciatis dicta error labore, numquam aliquam suscipit vero debitis aperiam. Aspernatur quam nam ipsum debitis optio accusamus pariatur. Aperiam.
            </p>
          </div>          
        </div>
        <div className='mt-10'>
          <h3 className='text-xl'>Tempo para conclusão</h3>
          <p className='text-lg text-lime-500'>XX dias</p>
        </div>
      </div>
    </div>
);
}