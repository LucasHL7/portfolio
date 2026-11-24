import { Box, Link, Stack, styled, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import Section from "../../../../components/Section/Section";
import Tag from "../../../../components/Tag/Tag";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { profile, projects } from "../../../../data/profile";

const Thumb = styled("img")(({ theme }) => ({
    width: "100%",
    aspectRatio: "16 / 10",
    objectFit: "contain",
    borderRadius: 4,
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
}));

const Projects = () => {
    return (
        <Section id="projects" title="Projetos">
            <Stack component="ul" spacing={6} sx={{ listStyle: "none", m: 0, p: 0 }}>
                {projects.map((project) => (
                    <li key={project.title}>
                    <AnimationComponent>
                        <Box
                            display="grid"
                            gridTemplateColumns={{ xs: "1fr", sm: "180px 1fr" }}
                            gap={{ xs: 2, sm: 3 }}
                        >
                            <Box order={{ xs: 2, sm: 1 }}>
                                <Thumb src={project.image} alt={`Captura de tela do projeto ${project.title}`} loading="lazy" />
                            </Box>
                            <Box order={{ xs: 1, sm: 2 }}>
                                <Typography component="h3" fontWeight={600} color="text.primary">
                                    {project.title}
                                </Typography>
                                <Typography color="text.secondary" mt={1} lineHeight={1.7}>
                                    {project.description}
                                </Typography>
                                <Box display="flex" flexWrap="wrap" gap={1} mt={1.5}>
                                    {project.tags.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </Box>
                                <Stack direction="row" spacing={2.5} mt={2}>
                                    {project.websiteURL && (
                                        <Link
                                            href={project.websiteURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            underline="hover"
                                            color="text.primary"
                                            sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 500, fontSize: "0.9rem" }}
                                        >
                                            Ver site <ArrowOutwardIcon sx={{ fontSize: 16 }} />
                                        </Link>
                                    )}
                                    <Link
                                        href={project.codeURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        color="text.primary"
                                        sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, fontWeight: 500, fontSize: "0.9rem" }}
                                    >
                                        <GitHubIcon sx={{ fontSize: 16 }} /> Código
                                    </Link>
                                </Stack>
                            </Box>
                        </Box>
                    </AnimationComponent>
                    </li>
                ))}
            </Stack>

            <Link
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="text.primary"
                sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, mt: 6, fontWeight: 600 }}
            >
                Mais projetos no GitHub <ArrowOutwardIcon fontSize="small" />
            </Link>
        </Section>
    );
};

export default Projects;
