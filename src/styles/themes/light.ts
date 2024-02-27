export default {
  title: 'light',
  box: {
    shadow: '-4px 0 10px rgba(0, 0, 0, 0.2)',
    shadow_secondary: '20px 0px 20px 20px rgba(0, 0, 0, 0.15);'
  },
  background: {
    colors: {
      primary: '#dee4ec',
      secondary: '#d9e4f1'
    },
    linear: {
      primary: `linear-gradient(90deg, 
        #657d7c82 0%, 
        #9fceca 15%,
        #5e9894 50%,
        #9fceca 85%, 
        #657d7c82 100%)`,

      hover: `linear-gradient(90deg,
         #256c69 0%,
          #3b6763 15%, 
          #4b9792 50%, 
          #3b6763 85%, 
          #256c69 100%);
      `
    }
  },
  font: {
    family: 'Share Tech, sans-serif',
    sizes: {
      xxxxsmall: '0.8rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      xxxlarge: '5.6rem',
      huge: '6.4rem'
    }
  },
  colors: {
    scrollbar_thumb: '#343a40',
    scrollbar_track: '#f0efeb',
    sidebar: '#438480',
    primary: '#c2c3b3',
    secondary: '#a3c8ba',
    tertiary: '#e9eae1',
    text: '#778a8c',
    text_hover: '#a9aa8d',
    text_secondary: '#5c7e83',
    text_secondary_hover: '#5f8d89',
    text_tertiary: '#6a6a6a',
    text_tertiary_hover: '#859c91',
    overlay: 'rgba(0, 0, 0, 0.2)',
    white: '#fff',
    purple: '#7c3aed',
    blue: '#4f46e5'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;
