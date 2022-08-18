import hamburger from './assets/hamburger-menu.svg';
export default function Header() {
    return (
        <header className='w-full bg-slate-600  h-16 flex flex-row'>
            <button>
                <img src={hamburger} alt={'Menu'} className='w-16' />
            </button>
            <h1>Header</h1>
        </header>
    );
}
