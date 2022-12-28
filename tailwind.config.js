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
        'gradient-home-bar': 'linear-gradient(177.89deg, rgb(76, 81, 191) 14.43%, rgba(111, 122, 222, 0.737) 37.07%, rgba(175, 183, 255, 0) 73.07%)',
        'home-serve-texture':"url('https://media.graphassets.com/7X80fnSIS56yUzsB37tN')",
        'blog':'url("/assets/globe.svg"), radial-gradient(37.86% 77.79% at 50% 100%, rgba(113, 128, 150, 0.25) 0%, rgba(113, 128, 150, 0) 100%), linear-gradient(rgb(26, 32, 44) 0%, rgb(45, 55, 72) 100%), linear-gradient(rgb(13, 15, 20) 0%, rgba(27, 32, 43, 0) 100%), none',
      },
      textColor: {
        'gradient-text': 'linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)',
      },
      backgroundPosition: {
        'center-50px': 'center -50px, 0% 0%, 0% 0%, 0% 0%, 0% 0%',
      }

    },
    colors: {
      transparent: 'transparent',
      'hoverOnTransparent': 'rgb(var(--color-hoverOnTransparent))',
      current: 'currentColor',
      'color-btn':'rgb(90, 103, 216)',
      'color-btn-bg':'rgb(90 103 216)',
      'color-btn-hover': 'rgb(76 81 190)',
      'color-text-primary': 'rgb(45, 55, 72)',
      'color-text-secondary': 'rgb(113, 128, 150)',
      'color-text-hover':'rgb(90 103 216)',
      'color-text-hover-w':'rgb(163 191 250)',
      'color-navbar':'rgb(26, 32, 44)',
      'color-text-btn':'rgb(74, 85, 104)',
      'color-text-graywhite': 'rgb(226, 232, 240)',
      'color-border': 'rgb(226, 232, 240)',
      'color-text-lightgray':'rgb(113, 128, 150)',
      'color-text-lightblack':'rgb(12, 52, 75)',
      'color-text-datetime':'rgb(143, 166, 178)',
      'color-text-darkblack':'rgb(26, 32, 44)',



      'color-bg-benefitsofjoing': '#F5F2F0',
      'color-bg-icon':'rgb(247, 250, 252)',
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
      'test':'rgba(248, 247, 216, 0.7)',
      'color-pink':'rgb(236 72 153)',
      'color-shadow':'rgba(0, 0, 0, 0.024)',
      'color-blog-title':'rgb(8, 35, 51)',

      'color-blog-subheadline': 'rgb(226, 232, 240)',
      'color-blog-tag':'rgb(237, 242, 247)',
      'color-events-bg':'rgb(94, 91, 254)',
    },
  },
  plugins: [],
}
