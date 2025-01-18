// src/theme.js
import { createTheme } from '@mui/material/styles';
import { capitalize } from '@mui/material';
const theme = createTheme({
  typography: {
    body1: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '30px', 
      fontWeight: 900, 
    },
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '36px', 
      fontWeight: 700, 
    },
    h6: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '20px',
      capitalize,
       color: '#757575'
    },
  },
});

export default theme;