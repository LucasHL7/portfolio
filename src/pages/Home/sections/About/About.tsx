import { Box, Container, Divider, Grid, List, styled, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const About = () => {

    const StyledAbout = styled("div")(()=> ({
        backgroundColor: "white",
        height:"520px",
        padding: "0 20px",
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
                <Container maxWidth="lg" >
                    <Grid  marginTop={"30px"}/>
                    <Grid  >
                        <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"}>
                            <Typography variant="h2">
                                About me
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                            <StyledBox>
                                <WorkspacePremiumIcon sx={{display:"block", mx:"auto"}}/>
                                <StyledTypography variant="h6"> Experience </StyledTypography>
                                <StyledTypography> 2+ Years </StyledTypography>
                                <StyledTypography> Front-end Development </StyledTypography>
                            </StyledBox>
                            <StyledBox>
                                <WorkspacePremiumIcon sx={{display:"block", mx:"auto"}}/>
                                <StyledTypography  variant="h6"> Education </StyledTypography>
                                <StyledTypography> Bachelor's Degree </StyledTypography>
                                <StyledTypography> Computer Science  </StyledTypography>
                            </StyledBox>
                    </Grid>
                    <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                        <Typography textAlign={"center"} sx={{}} >
                            I'm a dedicated Frontend Developer with 2 years of experience creating 
                            digital solutions that users love. My background in Level 2 technical support has given me 
                            unique insights into user needs and problem-solving. I've built mobile apps with React Native, 
                            developed landing pages for various small businesses, and mastered technologies like React, 
                            Angular, and Python. I'm passionate about turning complex problems into intuitive, 
                            beautiful interfaces.
                        </Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem sx={{borderColor:"priary.main", borderWidth:1, mx:3, marginTop:"15px"}}/>
                    <Grid size={{xs:12, md:4}} display={"flex"} justifyContent={"center"} marginTop={"20px"} >
                        <Typography variant="h2"> Skills </Typography>
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