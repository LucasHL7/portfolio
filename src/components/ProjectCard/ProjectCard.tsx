import { Grid, styled, Typography } from "@mui/material";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({theme}) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({theme}) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
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

    const StyledTypography = styled(Typography)(({theme}) =>({
        color: theme.palette.primary.main,
    }))

    return (
        <StyledCard>
            <StyledTypography variant="h5">
                {title}
            </StyledTypography>
            <StyledTypography>
                {subtitle}
            </StyledTypography>
            <StyledTypography>
                <StyledImg src={srcImg}/>
            </StyledTypography>
            <StyledTypography>
                {description}
            </StyledTypography>
            <StyledTypography fontWeight={600} paddingTop={2}>
                {technologies}
            </StyledTypography>
            <Grid container spacing={12} paddingTop={2}>
                <Grid size={{xs:6}}>
                    <StyledButton onClick={() => window.open(websiteURL)}>Ver Site</StyledButton>
                </Grid>
                <Grid size={{xs:6}}>
                    <StyledButton onClick={() => window.open(codeURL)}>Ver Projeto</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard