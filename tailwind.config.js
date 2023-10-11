/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts,vue}', './components/**/*.{html,js}',],
    theme: {
        extend: {
            fontFamily: {
                classic: ['texgyreadventor-regular', 'sans'],
                important: ['Osiris', 'sans'],
            },
        },
    },
    plugins: [],
}

