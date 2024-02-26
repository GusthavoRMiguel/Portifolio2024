export default {
  title: 'dark',
  box: {
    shadow: '-4px 0 10px rgba(255, 255, 255, 0.2)',
    shadow_secondary: '20px 0px 20px 20px rgba(255, 255, 255, 0.15)'
  },
  background: {
    colors: {
      primary: '#3f2d2b',
      secondary: '#493f3a'
    },
    linear: {
      primary: `linear-gradient(    
        90deg,
        #72484445 0%, 
        #975c57 15%,
        #4a1a16 50%,
        #975c57 85%,
        #724844 100%)`,
      hover: `linear-gradient( 90deg,
        #8e737100 0%,
        #8b5a563d 15%, 
        #493230 50%,
        #8b5a563d 85%,
        #8e737100 100%)`
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
    sidebar: '#56413f',
    primary: '#877168',
    secondary: '#b3a596',
    tertiary: '#d6c4fb',
    text: '#dfdde4',
    text_hover: '#e3e6d6',
    text_secondary: '#f1f4d5',
    text_secondary_hover: '#f6f7e9',
    text_tertiary: '#593535',
    text_tertiary_hover: '#7f5555',
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
