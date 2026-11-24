import { createTheme, responsiveFontSizes } from "@mui/material";

const headingFont = '"SUSE Mono", ui-monospace, monospace';
const bodyFont = '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

let theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#9ca2ad",
            contrastText: "#141518",
        },
        secondary: {
            main: "#424651",
        },
        background: {
            default: "#141518",
            paper: "#1c1e22",
        },
        text: {
            primary: "#e5e7eb",
            secondary: "#868b94",
        },
        divider: "rgba(255, 255, 255, 0.08)",
    },
    shape: {
        borderRadius: 6,
    },
    typography: {
        fontFamily: bodyFont,
        h1: { fontFamily: headingFont, fontWeight: 600, letterSpacing: "-0.02em" },
        h2: { fontFamily: headingFont, fontWeight: 600, letterSpacing: "-0.01em" },
        h3: { fontFamily: headingFont, fontWeight: 600 },
        h4: { fontFamily: headingFont, fontWeight: 600 },
        h5: { fontFamily: headingFont, fontWeight: 600 },
        h6: { fontFamily: headingFont, fontWeight: 600 },
        overline: { fontFamily: headingFont, letterSpacing: "0.15em" },
        button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: "smooth",
                    scrollPaddingTop: "16px",
                },
                "@media (prefers-reduced-motion: reduce)": {
                    html: { scrollBehavior: "auto" },
                },
                body: {
                    overflowX: "hidden",
                },
                "::selection": {
                    background: "rgba(156, 162, 173, 0.3)",
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    padding: "10px 20px",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    fontWeight: 500,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
