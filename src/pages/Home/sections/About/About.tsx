import { Box, Container, Divider, Grid, List, styled, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const About = () => {

    const StyledAbout = styled("div")(()=> ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
    }))

    const StyledBox = styled(Box)(({theme}) => ({
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "24px",
        margin: "20px",
        width:"300px"
    }))

    const StyledTypography = styled(Typography)(() =>({
        margin:"8px",
        textAlign:"center",
        fontSize:"18px"
    }))

    const StyledSkills = styled(Box)(({theme})=>({
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "8px",
        padding:"8px",
        width:"150px",
        textAlign:"center",
    }))

    return(
        <>
            <StyledAbout >
                <Container maxWidth="lg">
                    <Grid  marginTop={"30px"}/>
                    <Grid>
                        <Grid id="about" size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                            <Typography variant="h2">
                                Sobre
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                            <StyledBox>
                                <WorkspacePremiumIcon sx={{display:"block", mx:"auto"}}/>
                                <StyledTypography variant="h6"> Experiência </StyledTypography>
                                <StyledTypography> 2+ Anos </StyledTypography>
                                <StyledTypography> Desenvolvimento <br/> Front-end </StyledTypography>
                            </StyledBox>
                            <StyledBox>
                                <WorkspacePremiumIcon sx={{display:"block", mx:"auto"}}/>
                                <StyledTypography  variant="h6"> Formação </StyledTypography>
                                <StyledTypography> Bacharelado </StyledTypography>
                                <StyledTypography> Ciência da Computação  </StyledTypography>
                            </StyledBox>
                    </Grid>
                    <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                        <Typography textAlign={"center"} sx={{}} >
                            Sou Desenvolvedor Front-End formado em Ciência da Computação, com 2 anos de experiência atuando em projetos 
                            freelancers. Minha trajetória me levou a transformar aprendizado constante em resultados concretos, desenvolvendo
                            desde aplicações mobile com React Native até landing pages para pequenos e médios negócios. Domino tecnologias 
                            como React, Angular e Python, e tenho especial apreço por criar interfaces que unem funcionalidade e experiência 
                            intuitiva. trago para cada projeto não apenas expertise técnica, mas também responsabilidade, foco e a vontade de
                            construir soluções que façam a diferença na vida das pessoas.
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{borderColor:"priary.main", borderWidth:1, mx:3, marginTop:"15px"}}/>
                    <Grid id="skills" size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                        <Typography variant="h2"> Habilidades </Typography>
                    </Grid>
                   <Grid >
                        <Grid size={{xs:12, md:4}}  marginTop={"20px"} display={"flex"}  justifyContent={'space-between'} sx={{display:{xs:"none", md:"flex"}}} >
                            <StyledSkills > React </StyledSkills>
                            <StyledSkills > React Native </StyledSkills>
                            <StyledSkills > Angular </StyledSkills>
                            <StyledSkills > Python </StyledSkills>
                            <StyledSkills > Django </StyledSkills>
                        </Grid>
                        <Grid size={{xs:12, md:4}}  marginTop={"20px"} display={"flex"}  justifyContent={'space-between'} sx={{display:{xs:"none", md:"flex"}}}>
                            <StyledSkills > JavaScript </StyledSkills>
                            <StyledSkills > HTML </StyledSkills>
                            <StyledSkills > CSS </StyledSkills>
                            <StyledSkills > Git </StyledSkills>
                            <StyledSkills > Node.Js </StyledSkills>
                        </Grid>
                        <List sx={{display:{xs:"flex", md:"none"}, alignItem:"center", justifyContent:"space-between"}} >
                            <StyledSkills>
                                React<br/>
                                React Native<br/>
                                Angular<br/>
                                Python<br/>
                                Django<br/>
                            </StyledSkills>
                            <StyledSkills>
                                JavaScript<br/>
                                HTML<br/>
                                CSS<br/>
                                Git<br/>
                                Node.Js<br/>
                            </StyledSkills>
                        </List>
                   </Grid>
                </Container>
            </StyledAbout>
        </>
    )
}




export default About