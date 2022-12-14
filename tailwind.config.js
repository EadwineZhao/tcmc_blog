/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)',
        'gradient-bar': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
      },
      textColor: {
        'gradient-text': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
      },

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'color-footer' : '#031B34',
      'color-text': '#81afdd',
      'brightRed': 'hsl(12, 88%, 59%)',
      'brightRedLight': 'hsl(12, 88%, 69%)',
      'brightRedSupLight': 'hsl(12, 88%, 95%)',
      'darkBlue': 'hsl(228, 39%, 23%)',
      'darkGrayishBlue': 'hsl(227, 12%, 61%)',
      'veryDarkBlue': 'hsl(233, 12%, 13%)',
      'veryPaleRed': 'hsl(13, 100%, 96%)',
      'veryLightGray': 'hsl(0, 0%, 98%)',

    },
  },
  plugins: [],
}
