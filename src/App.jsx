import Landing from "./pages/Landing";
import Header from "./components/Header/Header";
import "./assets/style/main.scss";
import Footer from "./components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Header />
      <ParallaxProvider>
       <Landing /> 
      </ParallaxProvider>
      <Footer />
    </>
  );
}

export default App;
