module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [
        'font-sans',
        'font-serif',
        'font-light',
        'font-normal',
        'font-medium',
        'font-semibold',
        'font-bold',
        'bg-warning',
      ],
    },
  },
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
        error: '#C30052',
        success: '#00BA88',
        warning: '#F4B740',
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
