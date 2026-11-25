import { Box, Button, IconButton, Link, Stack, styled, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Avatar from "../../assets/images/profile.png";
import { navItems, profile } from "../../data/profile";
import { useActiveSection } from "./useActiveSection";

const Wrapper = styled("header")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
        position: "sticky",
        top: 0,
        height: "100vh",
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(4),
    },
}));

const Photo = styled("img")(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    border: `2px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
        width: 140,
        height: 140,
    },
}));

const NavLink = styled("a", {
    shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    padding: "6px 0",
    fontSize: "0.95rem",
    fontWeight: 500,
    textDecoration: "none",
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
    transition: "color 0.2s",
    "&::before": {
        content: '""',
        display: "block",
        height: 1,
        width: active ? 40 : 20,
        backgroundColor: "currentColor",
        transition: "width 0.2s",
    },
    "&:hover": {
        color: theme.palette.text.primary,
    },
    "&:hover::before": {
        width: 40,
    },
}));

const socials = [
    { label: "GitHub", href: profile.links.github, icon: <GitHubIcon /> },
    { label: "LinkedIn", href: profile.links.linkedin, icon: <LinkedInIcon /> },
    { label: "WhatsApp", href: profile.links.whatsapp, icon: <WhatsAppIcon /> },
    { label: "Instagram", href: profile.links.instagram, icon: <InstagramIcon /> },
];

const sectionIds = navItems.map((item) => item.id);

const Sidebar = () => {
    const active = useActiveSection(sectionIds);

    return (
        <Wrapper>
            <Box>
                <Photo src={Avatar} alt={`Foto de ${profile.name}`} />
                <Typography variant="h1" sx={{ fontSize: { xs: "2.4rem", md: "3rem" }, lineHeight: 1.1 }}>
                    {profile.name}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: "1.15rem", md: "1.25rem" }, mt: 1.5, fontWeight: 500 }}>
                    {profile.role}
                </Typography>
                <Typography color="text.secondary" mt={2} maxWidth={320} lineHeight={1.7}>
                    {profile.tagline}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={3} mt={3}>
                    <Button variant="contained" href="#contact" endIcon={<MailOutlineIcon />}>
                        Fale comigo
                    </Button>
                    <Link
                        href={profile.cvURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="text.primary"
                        sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, fontWeight: 600 }}
                    >
                        Currículo <ArrowOutwardIcon fontSize="small" />
                    </Link>
                </Stack>

                <Stack component="nav" aria-label="Seções" mt={4} spacing={0.5} sx={{ display: { xs: "none", md: "flex" } }}>
                    {navItems.map((item) => (
                        <NavLink key={item.id} href={`#${item.id}`} active={active === item.id}>
                            {item.label}
                        </NavLink>
                    ))}
                </Stack>
            </Box>

            <Stack direction="row" spacing={0.5} mt={2} ml={-1}>
                {socials.map((s) => (
                    <IconButton
                        key={s.label}
                        component="a"
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                    >
                        {s.icon}
                    </IconButton>
                ))}
            </Stack>
        </Wrapper>
    );
};

export default Sidebar;
