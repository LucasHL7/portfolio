import { Box, Stack, Typography } from "@mui/material";
import Section from "../../../../components/Section/Section";
import Tag from "../../../../components/Tag/Tag";
import { experiences } from "../../../../data/profile";

const Experience = () => {
    return (
        <Section id="experience" title="Experiência">
            <Stack component="ol" spacing={5} sx={{ listStyle: "none", m: 0, p: 0 }}>
                {experiences.map((exp) => (
                    <Box
                        component="li"
                        key={`${exp.title}-${exp.place}`}
                        display="grid"
                        gridTemplateColumns={{ xs: "1fr", sm: "130px 1fr" }}
                        gap={{ xs: 0.5, sm: 3 }}
                    >
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"SUSE Mono", monospace', pt: "3px" }}>
                            {exp.period}
                        </Typography>
                        <Box>
                            <Typography fontWeight={600} color="text.primary">
                                {exp.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                {exp.place}
                            </Typography>
                            <Typography color="text.secondary" mt={1} lineHeight={1.7}>
                                {exp.description}
                            </Typography>
                            {exp.tags && (
                                <Box display="flex" flexWrap="wrap" gap={1} mt={1.5}>
                                    {exp.tags.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Section>
    );
};

export default Experience;
