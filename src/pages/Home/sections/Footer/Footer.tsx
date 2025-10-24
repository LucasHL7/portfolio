import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    return(
        <>
            <Box paddingBottom={2} paddingTop={2}>
                <Container maxWidth="sm">
                    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} paddingBottom={1}>
                        <IconButton onClick={() => window.open("https://github.com/LucasHL7")}>
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/lucas-henrique-963a72211")}>
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.instagram.com/lucashls_0")}>
                            <InstagramIcon/>
                        </IconButton>
                    </Box>
                    <Typography textAlign="center" fontSize={"15px"}>
                        © 2025 Lucas Henrique - Todos os direitos reservados.
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer