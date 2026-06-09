import React from 'react';
import stackImage from '../assets/about/anil.jpg';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-500 pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div className="relative flex justify-center w-full">

            {/* Lanyard */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>

            {/* Clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-lg"></div>

            {/* Badge */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-2xl relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">

              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full"></div>
              </div>

              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                <img
                  src={stackImage}
                  alt="Anil Naik"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            About Me
          </h2>

          <p className="text-lg font-medium mb-12 leading-relaxed max-w-3xl text-white">

            Hi, I'm{" "}
            <span className="text-black text-xl font-black uppercase">
              KARAMTHOT ANIL NAIK
            </span>
            , a Computer Science Engineering student and aspiring Data Scientist
            with expertise in Python, Machine Learning, Natural Language
            Processing (NLP), SQL, Power BI, and Data Analytics.

            <br /><br />

            I am passionate about building intelligent systems that transform
            raw data into actionable insights. My experience includes developing
            an AI-powered Autonomous Career Intelligence Agent (ACIA) using
            Machine Learning and NLP, as well as creating interactive Power BI
            dashboards for business intelligence and decision-making.

            <br /><br />

            I continuously explore Artificial Intelligence, Predictive
            Analytics, Recommendation Systems, and Data Visualization to create
            impactful real-world solutions.

          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-4">

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Python
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Machine Learning
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              NLP
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              SQL
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Power BI
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Pandas
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              NumPy
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Scikit-Learn
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Data Analytics
            </span>

            <span className="bg-black text-white px-5 py-3 rounded-full font-semibold">
              Data Visualization
            </span>

          </div>

          {/* Resume Button */}
          <div className="mt-10">
            <a
              href="/Anil_Naik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8C242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

    </section>
  );
};

export default About;