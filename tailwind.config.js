module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F2F2F2",
        gray: "#7D889E",
        blue: "#2C7DFA",
        "blue-shade": "#3685FF",
        "dark-navy": "#1F314F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
