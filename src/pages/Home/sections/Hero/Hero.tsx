import { styled } from "@mui/system"
import { Box, Container, Grid, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/profile.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "110vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }))

    const StyledButton = styled("button")(({theme}) => ({
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
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,

        }
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

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
                            <Typography color="secondary" variant="h2" textAlign={"center"} paddingBottom={"2"}>I'm a Front-end developer</Typography>

                            <Grid container display={"flex"} justifyContent={"center"} spacing={3}>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <DownloadIcon/>
                                        <Typography>
                                            Download Cv
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton >
                                        <EmailIcon/>
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>     
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero