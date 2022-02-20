import React from "react";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";
import News from "../../components/News/News";
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
