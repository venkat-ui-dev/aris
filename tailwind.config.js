module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        "spin": "spin 3s linear 1s",
        "glow-pulse": "glow 3s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "fadeIn": 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
         '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.1)", opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
