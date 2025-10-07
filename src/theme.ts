import { createTheme, responsiveFontSizes } from "@mui/material";
 
let theme = createTheme({
    palette:{
        primary: {
            main: '#9ca2ad',
        },
        secondary:{
            main: '#424651',
        },
    },
    typography:{
            fontFamily: "SUSE Mono",
    },
});


theme = responsiveFontSizes(theme);

export default theme;
