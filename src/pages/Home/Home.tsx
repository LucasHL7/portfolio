import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Footer from "./sections/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import Project from "./sections/Projects/Projects"

const Home = () =>{
    return(
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Project/>
            <Footer/>
        </>
    )
}

export default Home