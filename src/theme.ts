import { createTheme, responsiveFontSizes } from "@mui/material";
 
let theme = createTheme({
    palette:{
        primary: {
            main: '#282c34',
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