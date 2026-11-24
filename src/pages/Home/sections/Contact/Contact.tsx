import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import Section from "../../../../components/Section/Section";
import { profile } from "../../../../data/profile";

const Contact = () => {
    return (
        <Section id="contact" title="Contato">
            <Typography color="text.secondary" lineHeight={1.8} maxWidth={520}>
                Se você tem um projeto, uma vaga ou só quer trocar uma ideia, me mande uma mensagem por aqui
                ou pelo{" "}
                <Link href={profile.links.whatsapp} target="_blank" rel="noopener noreferrer" color="text.primary">
                    WhatsApp
                </Link>{" "}
                ou{" "}
                <Link href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" color="text.primary">
                    LinkedIn
                </Link>
                .
            </Typography>

            <Box component="form" action={profile.formAction} method="POST" mt={4} maxWidth={520}>
                <input type="hidden" name="_subject" value="Novo contato pelo portfólio" />
                <input type="hidden" name="_template" value="table" />
                <Stack spacing={2}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <TextField name="name" label="Nome" required fullWidth size="small" autoComplete="name" />
                        <TextField name="email" type="email" label="E-mail" required fullWidth size="small" autoComplete="email" />
                    </Stack>
                    <TextField name="message" label="Mensagem" required fullWidth multiline minRows={4} />
                    <Box>
                        <Button type="submit" variant="outlined" color="inherit">
                            Enviar
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Section>
    );
};

export default Contact;
