'use client';
import './globals.css';
import Header from '../components/Header';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>

                <main className='bg-gblack w-full h-full'>
                    <Header></Header>
                    {children}
                </main>
            </body>
        </html>
    );
}
