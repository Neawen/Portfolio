import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import "./Landing.scss";

const Landing = () => {
    return (
        <main className="main">
            <Hero/>
            <About/>
            <Projects/>
        </main>
    );
};

export default Landing;