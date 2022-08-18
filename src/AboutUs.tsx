import { Link } from 'react-router-dom';
export default function AboutUs() {
    return (
        <div className='min-h-max min-w-max'>
            <h1 className='font-bold text-4xl'>Sobre nós!</h1>
            <Link to={'/'} className='text-sm'>
                <img src='#' alt='Home' />
            </Link>
        </div>
    );
}
