import React from "react";
import About from "../components/About";
import ContactSection from "./ContactSection";

import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import ProfessionalTrainings from "../components/ProfessionalTrainings";

import SkillsAndJourney from "./SkillsAndJourney";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div id="home">
      <Hero></Hero>
      <About></About>
      <SkillsAndJourney></SkillsAndJourney>
      <ProfessionalTrainings></ProfessionalTrainings>
      <Projects></Projects>
      <FAQ></FAQ>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
