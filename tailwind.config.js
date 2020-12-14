module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        body: '#4E4B66',
        active: '#14142B',
        label: '#6E7191',
        placeholder: '#A0A3BD',
        line: '#D9DBE9',
        inputBackground: '#EFF0F7',
        background: '#F7F7FC',
        offWhite: '#FCFCFC',
        disabled: '#A5A3B1',
      },
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
