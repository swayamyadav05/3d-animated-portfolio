import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MoreProjects from "./sections/MoreProjects";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonial from "./sections/Testimonial";
import Certifications from "./sections/Certifications";
import About from "./sections/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <MoreProjects />
      <FeatureCards />
      <Experience />
      <Certifications />
      <TechStack />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
