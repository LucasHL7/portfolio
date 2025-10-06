import { styled } from "@mui/system"
import { Container, Grid, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/profile.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
        width: "100%",
    }))

    const StyledButton = styled("button")(() => ({
        color: "#1976d2",
        backgroundColor: "transparent",
        border: 0
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))

    return(
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4}} >
                            <StyledImg src={Avatar} alt="Avatar" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8}} >
                            <Typography color="primary" variant="h1" textAlign={"center"}>Lucas Henrique</Typography>
                            <Typography color="primary" variant="h2" textAlign={"center"}>I'm a Front-end developer</Typography>

                            <Grid container display={"flex"} justifyContent={"center"}>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <DownloadIcon/>
                                        Download Cv
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                                    <StyledButton>
                                        <EmailIcon/>
                                        Contact me
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