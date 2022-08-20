/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'azul': "#2D3659",
                'gpink': "#901636",
                'gblack': "#0B0C0F",
            }
        },
    },
    plugins: [],
};
