import { Box, Container, Grid, styled, Typography } from "@mui/material"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const Project = () =>{

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,

    }));

    const projects = [
        {
            title: "Teste",
            subtitle: "teste ",
            srcImg: "src/img",
            description: "Teste",
            technologies: "Teste",
            websiteURL: "teste",
            codeURL:"site",
        },
        {
            title: "Teste",
            subtitle: "teste ",
            srcImg: "src/img",
            description: "Teste",
            technologies: "Teste",
            websiteURL: "teste",
            codeURL:"site",
        }
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{md:6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}


export default Project