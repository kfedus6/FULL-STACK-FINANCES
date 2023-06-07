/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            padding: '2rem',
            content: true
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif']
            }
        },
    },
    plugins: [require('@tailwindcss/forms')],
}