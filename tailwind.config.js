/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "app-background":"#F8FAFC",
        "primary-background":"#FFFFFF",
        "text-primary-clr":"#1E293B",
        "text-secondary-clr":"#000000",
        "active-bg-clr":"#F1F5F9",
        "hover-bg-clr":"#F1F5F9",
        "main-background":"#ffffff"
      },
      boxShadow:{
        "bg-shadow-1":'0px 4px 4px 0px #00000040',
        "bg-shadow-2":'2px 2px 4px 0px #00000040',  
        "bg-shadow-3":'0px 4px 4px 0px #00000040',
  
      },
      backgroundImage: {
        'blue-purple-gradient': 'linear-gradient(90deg,  #4318D1 0%,#8B5CF6 100%)',
        'green-lightgreen-gradient': 'linear-gradient(90deg,#059669 0%,#34D399 100%)',
        'red-lightred-gradient': 'linear-gradient(90deg,#DC2626 0%,#FB7185 100%)',



      },
    },
  },
  plugins: [],
}