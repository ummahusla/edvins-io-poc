import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`
    },
    a: {
      boxShadow: 'none',
      textDecoration: 'none',
      color: '#2b37ff',
      fontWeight: 800
    },
    'a:hover': {
      textDecoration: 'underline'
    },
    strong: {
      fontWeight: 800
    },
    body: {
      color: '#1d2d35'
    },
    p: {
      marginBottom: '30px'
    },
    ul: {
      marginLeft: '30px !important'
    },
    ol: {
      marginLeft: '30px !important'
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography({
  ...Wordpress2016,
  baseFontSize: '18px'
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
