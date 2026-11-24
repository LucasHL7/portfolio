import { Box, styled, Typography } from "@mui/material";
import type { ReactNode } from "react";

const Wrapper = styled("section")(({ theme }) => ({
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("md")]: {
        paddingBottom: theme.spacing(16),
    },
}));

/** No celular o título fica grudado no topo enquanto a seção rola. */
const Heading = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: 0,
    zIndex: 10,
    margin: theme.spacing(0, -3, 3),
    padding: theme.spacing(2, 3),
    backgroundColor: "rgba(20, 21, 24, 0.85)",
    backdropFilter: "blur(8px)",
    [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(0, -6, 3),
        padding: theme.spacing(2, 6),
    },
    [theme.breakpoints.up("md")]: {
        position: "static",
        margin: theme.spacing(0, 0, 4),
        padding: 0,
        backgroundColor: "transparent",
        backdropFilter: "none",
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
