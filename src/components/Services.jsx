import React from 'react';

const ProjectCard = ({ number, title, text }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <span className="text-red-500 text-lg font-bold">
        {number}
      </span>

      <h3 className="text-2xl font-black text-gray-900 mt-3 mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-600 mb-6">
            Featured Projects
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Data Science & Business Intelligence Projects
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            Projects built using Python, Machine Learning, NLP,
            Power BI, SQL, Pandas, NumPy and Data Analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            number="01"
            title="Sales Performance Dashboard"
            text="Designed and developed an interactive Power BI dashboard using DAX measures to analyze Total Sales, Profit, Regional Performance and Category-wise trends. Implemented drill-down reports, filters and KPI tracking for business intelligence reporting."
          />

          <ProjectCard
            number="02"
            title="Autonomous Career Intelligence Agent (ACIA)"
            text="Built an AI-powered career recommendation engine using Python, NLP, NLTK, TF-IDF, cosine similarity and Scikit-Learn. Provides personalized career recommendations and automated skill-gap analysis."
          />

          <ProjectCard
            number="03"
            title="Machine Learning & NLP Solutions"
            text="Applied feature engineering, predictive modelling, model evaluation, cross-validation and NLP techniques using Pandas, NumPy, NLTK and Scikit-Learn to solve real-world analytical problems."
          />

          <ProjectCard
            number="04"
            title="Data Analytics & Visualization"
            text="Created insightful visualizations and analytical reports using Power BI, SQL, Matplotlib and Seaborn to transform raw data into meaningful business insights and decision-support dashboards."
          />

        </div>

        {/* Skills */}
        <div className="mt-20 text-center">

          <h3 className="text-3xl font-black text-gray-900 mb-8">
            Technologies Used
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Python
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Machine Learning
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              NLP
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Power BI
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              SQL
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Pandas
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              NumPy
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Scikit-Learn
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Data Analytics
            </span>

            <span className="bg-red-500 text-white px-5 py-3 rounded-full font-semibold">
              Data Visualization
            </span>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;