import { Box, Typography } from "@mui/material";
import { profile } from "../../../../data/profile";

const Footer = () => {
    return (
        <Box component="footer" pb={{ xs: 6, md: 12 }}>
            <Typography variant="body2" color="text.secondary" maxWidth={420} lineHeight={1.7}>
                Feito por {profile.name} com React, TypeScript e Material UI. Publicado na Netlify. ©{" "}
                {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;
