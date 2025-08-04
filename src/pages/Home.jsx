import React from "react";
import About from "../components/About";
import ContactSection from "./ContactSection";
import Skills from "../components/Skills";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import ProfessionalTrainings from "../components/ProfessionalTrainings";
// import Projects from "../components/Projects";

const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      <ProfessionalTrainings></ProfessionalTrainings>
      <FAQ></FAQ>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;

