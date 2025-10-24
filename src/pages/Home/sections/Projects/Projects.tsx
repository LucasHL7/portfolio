import { Box, Container, Grid, styled, Typography } from "@mui/material"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import doceDesejoSite from "/src/assets/images/Projects/doceDesejoSite.png"
import AppEcomendas from "/src/assets/images/Projects/AppEcomendas.png"
const Project = () =>{

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,

    }));

    const projects = [
        {
            title: "Doce Desejo",
            subtitle: "Landing Page para Encomendas",
            srcImg: {doceDesejoSite},
            description: "Uma landing page desenvolvida como primeiro trabalho freelancer para minha antiga empresa, especializada em delivery de doces. A página inclui um formulário personalizado para encomendas de bolos personalizados e outros produtos que não estavam disponíveis no site principal.",
            technologies: "HTML, CSS e Js",
            websiteURL: "https://docedesejoencomendas.netlify.app",
            codeURL:"https://github.com/LucasHL7/doceDesejo",
        },
        {
            title: "Doce Desejo - App Interno",
            subtitle: "Sistema de Gestão de Encomendas",
            srcImg: {AppEcomendas},
            description: "Aplicativo desenvolvido para otimizar a organização interna dos funcionários da Doce Desejo, facilitando o gerenciamento de encomendas, controle de pedidos e melhorando o fluxo de trabalho da equipe. Esse foi meu segundo trabalho de freelancer para a empresa que ja eu tinha trabalhado anteriormente. ",
            technologies: "React Native, Node.js, FireBase, Expo",
            websiteURL: "https://github.com/LucasHL7/sweet-desire",
            codeURL:"https://github.com/LucasHL7/sweet-desire",
        },

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="secondary.contrastText">Projetos</Typography>
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