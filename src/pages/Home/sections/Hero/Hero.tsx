import { styled } from "@mui/system"
import { Box, Container, Grid, Modal, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/profile.png"
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useState } from "react";


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "110vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }))

    const StyledButton = styled("button")(({theme}) => ({
        cursor: "Pointer",
        color: theme.palette.primary.main,
        backgroundColor: "transparent",
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        border: `1px solid ${theme.palette.primary.main}`,
        display:"inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,

        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    const StyledLink = styled("a")(({theme}) => ({
        textDecoration: "none",
        color: theme.palette.primary.main,
        fontFamily: "SUSE Mono",
        fontSize:"16px",
        fontWeight:"400",
    })) 

    const StyledInput = styled("input")(({theme})=>({
        borderColor: theme.palette.primary.main,
        borderRadius: "8px",
        borderWidth: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "6px",
        marginBottom: "8px",
    }))

     const Styledtextarea = styled("textarea")(({theme}) => ({
        borderColor: theme.palette.primary.main,
        borderRadius: "8px",
        width: "100%",
        padding: "8px",
        marginBottom: "8px",
        resize: "none",
        minHeight: "120px",
        fontSize: "14px",
        
    }))

    const StyledBox = styled(Box)(({theme})=>({
        backgroundColor: theme.palette.secondary.contrastText,
        borderRadius: "8px",
        padding: "20px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "24px",
        width: "340px",
        height: "450px",
    }))

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    

    return(
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}  >
                        <Grid size={{ xs: 12 , md: 4}} >
                            <Box position={"relative"} width={"100%"} top={"-100"} right={"0"} >
                                <StyledImg src={Avatar} alt="Avatar" />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8}} >
                            <Typography color="primary" variant="h1" textAlign={"center"}>Lucas Henrique</Typography>
                            <Typography color="secondary" variant="h2" textAlign={"center"} paddingBottom={"5px"}>I"m a Front-end developer</Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <DownloadIcon/>
                                        <StyledLink href="public\Curriculo-Lucas-Henrique.pdf" download="Curriculo-Lucas-Henrique.pdf">Download Cv</StyledLink>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton onClick={handleOpen}  >
                                        <EmailIcon/>
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>    
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledBox>
                                        <form action="https://formsubmit.co/lhls2002@gmail.com" method="POST">
                                            <Typography variant="h6" textAlign={"center"} marginBottom={"10px"}>Contact me!</Typography>
                                            <Typography fontSize={"13px"} textAlign={"center"}>Hey! Tell me about your project and how I can help...</Typography>
                                            <StyledInput type="name" name="name" placeholder="your name" required/>
                                            <StyledInput type="email" name="email" placeholder="your email" required/>
                                            <Typography fontSize={"15px"}>Your message:</Typography>
                                            <Styledtextarea name="text" required/>
                                            <StyledButton type="submit">Send</StyledButton>
                                            <Typography fontSize={"12px"} textAlign={"center"} marginTop={"10px"} marginBottom={"10px"}>Or send me a message in other plataforms</Typography>
                                        </form>
                                        <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"space-evenly"} margin={""}>
                                            <StyledLink href="https://mui.com/material-ui/material-icons/?query=wha&selected=WhatsApp"><WhatsAppIcon/></StyledLink>
                                            <StyledLink href="https://www.instagram.com/lucashls_0"><InstagramIcon/></StyledLink>
                                            <StyledLink href="https://www.linkedin.com/in/lucas-henrique-963a72211"><LinkedInIcon/></StyledLink>
                                        </Grid>
                                    </StyledBox>
                                </Grid>
                            </Box>
                        </Modal>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero