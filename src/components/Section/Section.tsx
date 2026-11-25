import { Box, styled, Typography } from "@mui/material";
import type { ReactNode } from "react";

const Wrapper = styled("section")(({ theme }) => ({
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
        paddingBottom: theme.spacing(16),
    },
}));

const Heading = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(4),
    },
}));

interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
    <Wrapper id={id} aria-labelledby={`${id}-title`}>
        <Heading>
            <Typography id={`${id}-title`} component="h2" variant="subtitle1" sx={{ fontFamily: "\"SUSE Mono\", monospace", fontWeight: 600, color: "text.primary" }}>
                {title}
            </Typography>
        </Heading>
        {children}
    </Wrapper>
);

export default Section;
