/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            font: {
                primary: 'futura_r',
            },
            colors: {
                primary: {
                    500: '#c33510',
                },
                secondary: {
                    500: '#1d2933',
                },
            },
            fontSize: {
                title: 'clamp(1.5rem, 3vw , 2.25rem)',
            },
        },
    },
    plugins: [],
};
