import { Fab, Zoom } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

/**
 * Botão flutuante de WhatsApp no celular. Aparece depois que a pessoa passa da
 * introdução e some na seção de contato, para não cobrir o formulário.
 */
const WhatsAppButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const contact = document.getElementById("contact");
            const inContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.8 : false;
            setVisible(window.scrollY > 400 && !inContact);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Zoom in={visible}>
            <Fab
                component="a"
                href={profile.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp"
                sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                    display: { md: "none" },
                    color: "#fff",
                    backgroundColor: "#25d366",
                    "&:hover": { backgroundColor: "#1ebe5b" },
                }}
            >
                <WhatsAppIcon />
            </Fab>
        </Zoom>
    );
};

export default WhatsAppButton;
