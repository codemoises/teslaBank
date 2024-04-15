export const theme = {
  colors: {
    primaryNormal: '#eb3850',
    primaryHover: '#b6182d',
    primaryOpacity: '#fff2f4',

    primaryDark: '#cb162e',
    primaryLight: '#eb3850',

    gradientDefault: 'linear-gradient(220.94deg, #eb3850 14.43%, #cb162e 85.28%)',

    blackNormal: '#1a191e',
    blackDark: '#353436',
    blackLight: '#5f5f5f',

    whiteNormal: '#ffffff',
    whiteDark: '#edeaef',
    whiteLight: '#f9f9f9',


    gray1: '#454446',
    gray2: '#555456',
    gray3: '#666566',
    gray4: '#767576',
    gray5: '#868587',
    gray6: '#969597',
    gray7: '#a6a6a7',

// Auxiliary
    redNormal: '#eb3d3d',
    redDark: '#d03333',
    redLight: '#f05454',

    greenNormal: '#32d957',
    greenDark: '#28bb49',
    greenLight: '#50e170',

    yellowNormal: '#ffce52',
    yellowDark: '#d9b043',
    yellowLight: '#ffd76b',
  },

  font: {
    family: {
      default: "'DM Sans', sans-serif",
      secondary: "'Inter', sans-serif"
    }
  },

  spacings: {
    gap0: '0px',
    gap8: '8px',
    gap16: '16px',
    gap24: '24px',
    gap32: '32px',
    gap40: '40px',
    gap48: '48px',
    gap56: '56px',
    gap64: '64px',
    gap72: '72px',
    gap80: '80px',
    gap88: '88px',
    gap96: '96px',
  },

  containers: {
    containerXl: '1216px',
    containerL: '1140px',
    containerM: '688px',
    containerS: '540px',
  },
} as const;
