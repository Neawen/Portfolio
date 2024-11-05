import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import "./Landing.scss";

const Landing = () => {
    return (
        <main className="main">
            <Hero/>
            <About/>
        </main>
    );
};

export default Landing;