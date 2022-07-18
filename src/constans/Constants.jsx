const VERDANA = `'Verdana'`;
const GOTHAM_PRO = `'Gotham Pro'`;

export const lightTheme = {
  fonts: {
    verdana: VERDANA,
    gothamPro: GOTHAM_PRO,
  },

  lineHeight: {
    verdanaHeight: '1.2',
    gothamProHeight: '0.9',
  },

  colors: {
    $white: '#FFFFFF',
    $orange: '#FC842D',
    $lightOrange: '#ff6b08',
    $blue: '#264061',
    $lightGrey: '#F0F1F3',
    $grey: '#9B9FAA',
    $black: '#212121',
    borderColor: '#E0E0E0',
  },

  spacing: value => `${4 * value}px`,

  options: {
    radius: '30px',
    buttonShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
    buttonShadowHover: `0 8px 43px rgb(255 107 1 / 60%)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient:
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%)',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
};

export const darkTheme = {
  colors: {
    $white: '#212121',
    $orange: '#264061',
    $lightOrange: '#1d60b8',
    $blue: '#264061',
    $lightGrey: '#4d4949',
    $grey: '#9B9FAA',
    $black: '#FFFFFF',
    borderColor: '#403f3f',
  },

  options: {
    radius: '30px',
    buttonShadow: `0px 4px 10px rgba(38, 64, 97, 0.5)`,
    buttonShadowHover: `0 8px 43px rgb(255 107 1 / 60%)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient:
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%)',
  },
};