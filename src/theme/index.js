import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    black: {
      100: '#C4C4C4',
      200: '#7C7C7C',
      300: '#292929',
      400: '#D8D8D8',
      500: '#FAFAFA',
      600: '#262B2E',
      800: '#181725',
    },
    green: {
      300: '#53B175',
    },
    white: {
      100: '#ffffff',
      200: '#EFF1F5',
    },
    primary: {
      10: '#ffffff',
      30: '#EFF1F5',
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    violet: {
      100: '#31374A',
    },
    pink: {
      100: '#F25656',
    },
    amber: {
      400: '#d97706',
    },
  },

  components: {
    VStack: {
      variants: {
        container: {
          flex: 1,
          paddingHorizontal: 16,
          bg: 'primary.30',
        },
      },
    },
    Divider: {
      baseStyle: ({colorMode}) => {
        return {
          backgroundColor: colorMode === 'dark' ? 'black.100' : 'black.200',
        };
      },
    },
    Heading: {
      baseStyle: ({colorMode}) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'primary.500',
        };
      },
      defaultProps: {
        size: 'xl',
        fontFamily: 'MontSemibold',
      },
    },
    Text: {
      variants: {
        heading: {
          textTransform: 'capitalize',
          color: 'black.800',
        },
      },
      baseStyle: ({colorMode}) => {
        return {
          color: colorMode === 'dark' ? 'black.100' : 'black.300',
        };
      },
      defaultProps: {
        size: 'md',
        fontFamily: 'MontRegular',
      },
      sizes: {
        xl: {
          fontSize: '64px',
        },
        slg: {
          fontSize: '48px',
        },
        lg: {
          fontSize: '32px',
        },
        semi: {
          fontSize: '24px',
        },
        md: {
          fontSize: '16px',
        },
        sm: {
          fontSize: '12px',
        },
      },
    },
    Button: {
      variants: {
        rounded: ({colorScheme}) => {
          return {
            bg: `${colorScheme}.500`,
            rounded: 'full',
          };
        },
      },
    },
  },
  fonts: {
    header: 'Mont',
    semibold: 'Mont',
    regular: 'Mont',
    thin: 'Mont',
    crimson: 'CrimsonPro',
  },
  fontConfig: {
    CrimsonPro: {
      100: {
        normal: 'CrimsonPro-Regular',
        italic: 'CrimsonPro-Regular',
      },
      200: {
        normal: 'CrimsonPro-Medium',
        italic: 'CrimsonPro-MediumItalic',
      },
      300: {
        normal: 'CrimsonPro-SemiBold',
        italic: 'CrimsonPro-SemiBoldItalic',
      },
      400: {
        normal: 'CrimsonPro-Bold',
        italic: 'CrimsonPro-BoldItalic',
      },
      500: {
        normal: 'CrimsonPro-ExtraBold',
        italic: 'CrimsonPro-ExtraBoldItalic',
      },
    },
    Mont: {
      100: {
        normal: 'MontThin',
        italic: 'MontThin',
      },
      200: {
        normal: 'MontRegular',
        italic: 'MontRegular',
      },
      300: {
        normal: 'MontSemibold',
        italic: 'MontSemibold',
      },
      400: {
        normal: 'MontExtrabold',
        italic: 'MontExtrabold',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});
