/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            height: {
                '22/100': '22%',
            },
            colors: {
                gpink: '#901636',
                gblack: '#0B0C0F',
            },
            keyframes: {
                'fade-in': {
                    from: {
                        opacity: 0,
                        transform: 'translateY(40px)',
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'fade-in': 'fade-in 1s ease-in-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
            addVariant('child-input', '& > input');
        },
    ],
};
