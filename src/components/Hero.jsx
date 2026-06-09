import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/anil-hero.png";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <img
        src={heroImage}
        alt="Anil Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h2 data-aos="fade-down" className="text-xl md:text-2xl text-gray-300 mb-4">Hello, I am</h2>
        <h1 data-aos="zoom-in" className="text-5xl md:text-7xl font-bold text-white mb-4">KARAMTHOT ANIL NAIK</h1>
        <h3 data-aos="fade-up" className="text-2xl md:text-4xl font-semibold text-cyan-400 mb-6">Data Scientist</h3>
        <p data-aos="fade-up" className="max-w-3xl text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          Computer Science Engineer specializing in Machine Learning, Natural Language Processing (NLP), Power BI, SQL, Python, Predictive Analytics and Data Visualization.
        </p>
        <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition">View Projects</a>
          <a href="/Anil_Naik_Resume.pdf" target="_blank" rel="noreferrer" className="px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition">Download Resume</a>
        </div>
        <div data-aos="fade-up" className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">Python</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">Machine Learning</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">NLP</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">Power BI</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">SQL</span>
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">Scikit-Learn</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
