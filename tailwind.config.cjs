/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat']
            },
            animation: {
                "nav-animation": "nav-animation 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
                "project-animation": "project-animation 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
                fadeIn: "fadeIn 0.5s ease-in forwards",
                fadeInlate: "fadeIn 1s ease-in forwards"
            },
            keyframes: {
                "nav-animation": {
                    "0%": {
                        transform: "scaleY(0.4)",
                        "transform-origin": "100% 0%"
                    },
                    "10%": {
                        transform: "scaleY(1)",
                        "transform-origin": "100% 0%"
                    },
                    "90%": {
                        transform: "scaleY(1)",
                        "transform-origin": "100% 0%",
                        opacity: 100
                    },
                    to: {
                        transform: "scaleY(0)",
                        "transform-origin": "100% 0%",
                        opacity: 0
                    }
                },
                "project-animation": {
                    "0%": {
                        transform: "scaleY(0.95)",
                        "transform-origin": "100% 0%"
                    },
                    "100%": {
                        transform: "scaleY(1)",
                        "transform-origin": "100% 0%"
                    }
                },
                fadeIn: {
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    }
                },
                fadeInlate: {
                    "0%": {
                        opacity: 0
                    },
                    "50%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: 1
                    }
                }
            }
        },
    },
    plugins: [],
}