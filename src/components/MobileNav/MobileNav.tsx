import { Box, styled } from "@mui/material";
import { navItems } from "../../data/profile";
import { useActiveSection } from "../Sidebar/useActiveSection";

export const MOBILE_NAV_HEIGHT = 52;

const Bar = styled("nav")(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.appBar,
    height: MOBILE_NAV_HEIGHT,
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "rgba(20, 21, 24, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up("md")]: {
        display: "none",
    },
}));

const Tab = styled("a", {
    shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontSize: "0.875rem",
    fontWeight: active ? 600 : 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    color: active ? theme.palette.text.primary : theme.palette.text.secondary,
    transition: "color 0.2s",
    WebkitTapHighlightColor: "transparent",
    "&::after": {
        content: '""',
        position: "absolute",
        left: "20%",
        right: "20%",
        bottom: -1,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.text.primary,
        transform: active ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.25s ease",
    },
    "&:active": {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
    },
}));

const sectionIds = navItems.map((item) => item.id);

const MobileNav = () => {
    const active = useActiveSection(sectionIds);

    return (
        <Bar aria-label="Seções">
            <Box display="flex" width="100%" maxWidth={600} mx="auto" px={1}>
                {navItems.map((item) => (
                    <Tab
                        key={item.id}
                        href={`#${item.id}`}
                        active={active === item.id}
                        aria-current={active === item.id ? "true" : undefined}
                    >
                        {item.label}
                    </Tab>
                ))}
            </Box>
        </Bar>
    );
};

export default MobileNav;
