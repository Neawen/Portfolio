import About from "../components/About/About";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import "./Landing.scss";

const Landing = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Projects />
      <Form />
    </main>
  );
};

export default Landing;
