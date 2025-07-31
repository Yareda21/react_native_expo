/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./App.tsx", "./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#6849a7",
                warning: "#cc475a",
                dark: {
                    text: "#d4d4d4",
                    title: "#fff",
                    background: "#252231",
                    navBackground: "#201e2b",
                    iconColor: "#9591a5",
                    iconColorFocused: "#fff",
                    uiBackground: "#2f2b3d",
                },
                light: {
                    text: "#625f72",
                    title: "#201e2b",
                    background: "#e0dfe8",
                    navBackground: "#e8e7ef",
                    iconColor: "#686477",
                    iconColorFocused: "#201e2b",
                    uiBackground: "#d6d5e1",
                },
            },
        },
    },
    plugins: [],
};
