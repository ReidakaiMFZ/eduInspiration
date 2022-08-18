import { Link } from 'react-router-dom';

export default function FrontPage() {
    return (
        <div className='min-h-max min-w-max'>
            <h1 className='font-bold text-4xl'>Pagina Inicial!</h1>
            <Link to={'/about'} className='text-sm'>
                Sobre Nós
            </Link>
        </div>
    );
}
