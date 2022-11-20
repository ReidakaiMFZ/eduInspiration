'use client';
import './globals.css';
import Header from '../components/Header';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    localStorage.setItem('theme', 'light');

    return (
        <html>
            <body>
                <main className='bg-white w-full h-full'>
                    <Header></Header>
                    {children}
                </main>
            </body>
        </html>
    );
}
