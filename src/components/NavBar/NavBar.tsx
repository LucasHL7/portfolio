import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(( {theme} )=>({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    }))
    const StyledMenuItem = styled(MenuItem)( ({theme}) => ({
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    }))

    return (
        <>
            <AppBar position="relative">
                <StyledToolbar >
                    <StyledMenuItem>About</StyledMenuItem> 
                    <StyledMenuItem>Skills</StyledMenuItem>
                    <StyledMenuItem>Projects</StyledMenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar