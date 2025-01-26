
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      monument: ["Monument", "sans-serif"],
      sofachrome: ["Sofachrome", "sans-serif"],
      horizon: ["Horizon", "sans-serif"],
    },
    animation: {
      "intro-bounce": "bounce 2s 2",
      "other-bounce": "my_bounce 2s infinite",
      "slide-left": "slide_left 3s 1",
      "slide-right": "slide_right 3s 1",
      "intro-unhide": "unhide 4s 1",
      text: "text 5s ease infinite",
      pop: "pop 0.5s 1",
      minipop: "mini_pop 0.5s 1"
    },
    keyframes: {
      pop: {
        "0%": { transform: "translateY(0%)" },
        "50%": { transform: "translateY(-10%)" },
        "100%": { transform: "translateY(0%)" },
      },
      text: {
        "0%, 100%": {
          "background-size": "300% 300%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "300% 300%",
          "background-position": "right center",
        },
      },
    },
    extend: {},
  },
  plugins: [],
  
}
