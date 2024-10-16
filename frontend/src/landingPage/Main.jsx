import React from "react";
import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
import DownloadSection from "./DownloadSection";
import Footer from "./Footer";
import Home from "./Home";

const Main = () => {
  return (
    <div className="bg-[#F9FFFF]">
      <section id="header">
        <Header />
      </section>
      <section id="home">
        <Home />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="download">
        <DownloadSection />
      </section>
    </div>
  );
};

export default Main;
