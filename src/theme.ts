// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // without gray color
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
    //for section titles
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '36px', 
      fontWeight: 900, 
    },

  
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '20px',
      fontWeight: 400, 
    },
    
    h4: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '20px',
      fontWeight: 500, 
      lineHeight: 1.5,
    },

    // for dates
    h5: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      //  color: '#636a82',
       fontWeight: 600,
       marginTop: '16px',
    },
   
    

     h6: {
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.5,
      // color: '#636a82',
    },
    
    
    
   
    
   
    

  },
});

export default theme;