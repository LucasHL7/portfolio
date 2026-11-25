import { Box, Container } from "@mui/material";
import MobileNav from "../../components/MobileNav/MobileNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";

const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 6 } }}>
            <MobileNav />
            <WhatsAppButton />
            <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr", md: "5fr 7fr" }}
                columnGap={{ md: 8 }}
            >
                <Sidebar />
                <Box component="main" pt={{ xs: 2, md: 7 }}>
                    <About />
                    <Experience />
                    <Projects />
                    <Contact />
                    <Footer />
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
