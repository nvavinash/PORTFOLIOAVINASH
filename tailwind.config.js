/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0f172a", // Slate 900
                surface: "#1e293b",    // Slate 800
                primary: "#38bdf8",    // Sky 400
                secondary: "#818cf8",  // Indigo 400
                accent: "#2dd4bf",     // Teal 400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1400px',
                },
            },
        },
    },
    plugins: [],
}
