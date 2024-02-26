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
      #ccc 0%,
      #fff 15%,
      #fff 50%,
      #fff 85%,
      #ccc 100%)`,

      hover: `linear-gradient( 90deg,
      #fff 0%,
      #ccc 15%,
      #ccc 50%,
      #ccc 85%,
      #fff 100%)`
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
    text: '#73989b',
    text_hover: '#a9aa8d',
    text_secondary: '#5c7e83',
    text_secondary_hover: '#5f8d89',
    text_tertiary: '#c9d4c3',
    text_tertiary_hover: '#d5ede1',
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
