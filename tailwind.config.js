/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Inter: ["Inter", "sans-serif"],
            Poppins: ["Poppins", "sans-serif"],
         },
         colors: {
            custom: {
               primary: "#E6CCBE",
               secondary: "#41337A",
               accent: "#DE3C4B",
               tertiary: "#676f54",
            },
         },
      },
   },
   plugins: [],
};
