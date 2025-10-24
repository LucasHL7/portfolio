import { AppBar, Box, Button, Link, Menu, MenuItem, MenuList, styled, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

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

    const StyledLinkNav = styled(Link)(() => ({
        textDecoration: 'none'
    }))

    const StyledButton = styled(Button)(({theme})=>({
        display:"flex",
        alignItems: "right",
        justifyContent: "right",
        color: theme.palette.primary.main,
        minWidth: "auto",
        padding: "8px"
    }))
    const StyledBox = styled(Box)(({theme})=>({
        display: "flex",
        justifyContent: "flex-end",
        padding:"10px",
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
    }))
    const StyledMenuList = styled(MenuList)(({})=>({
        padding: "0px",
        display: "flex",
        flexDirection: "row",
        gap:"4px"
    }))
    const StyledMenu = styled(Menu)(({theme})=>({
       '& .MuiPaper-root':{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        minWidth: "150px",
        borderRadius: "8px",
        boxShadow: theme.shadows[5],
        border: `1px solid ${theme.palette.primary.main}`,
       },

    }))

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openNav = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    }
    const closeNav = () => {
        setAnchorNav(null);
    }

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeNav();
        }
    };
    return (
        <>
            <AppBar position="static">
                <StyledToolbar sx={{display:{xs:"none", md:"flex"}}}>
                    <StyledMenuItem onClick={() => handleSmoothScroll("about")}>
                        <StyledLinkNav>Sobre</StyledLinkNav>
                    </StyledMenuItem> 
                    <StyledMenuItem  onClick={() => handleSmoothScroll("skills")}>
                        <StyledLinkNav>Habilidades</StyledLinkNav>
                    </StyledMenuItem>
                    <StyledMenuItem  onClick={() => handleSmoothScroll("projects")}>
                        <StyledLinkNav>Projetos</StyledLinkNav>
                    </StyledMenuItem>
                </StyledToolbar>
                <StyledBox sx={{display:{sx:"flex", md:"none"}}}>
                    <StyledButton onClick={openNav} >
                        <MenuIcon/>
                    </StyledButton>
                    <StyledMenu anchorOrigin={{vertical:"top", horizontal:"right"}} transformOrigin={{vertical:"top", horizontal:"right"}} open={Boolean(anchorNav)} onClose={closeNav} sx={{display:{xs:"flex", md:"none"}}}>
                        <StyledMenuList>
                            <MenuItem onClick={() => handleSmoothScroll("about")}>About</MenuItem>
                            <MenuItem onClick={() => handleSmoothScroll("skills")}>Skills</MenuItem>
                            <MenuItem onClick={() => handleSmoothScroll("projects")}>Projects</MenuItem>
                        </StyledMenuList>
                    </StyledMenu>
                </StyledBox>
            </AppBar>
        </>
    )
}

export default NavBar