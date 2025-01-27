import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scrollToSection(id);
    } else {
      if (location.pathname === '/sachumanpage/work') {
        scrollToSection('work');
      }
    }
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">Sachin Jain</Link>
            <div className="space-x-6">
              <Link to="/sachumanpage/work" onClick={() => scrollToSection('work')} className="text-blue-600 hover:text-blue-800">Work</Link>
              <Link to="/sachumanpage/work#projects" onClick={() => scrollToSection('projects')} className="text-blue-600 hover:text-blue-800">Projects</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 max-w-5xl mx-auto px-4">
        <section id="work" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Work Experience</h2>
          {/* Nutanix */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <img src="/path/to/nutanix-logo.png" alt="Nutanix Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Nutanix</h3>
                <span className="text-gray-600">September 2024 - December 2024</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Software Developer Co-op Capstone</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2">Developed ETL data pipeline utilizing OpenSearch - Kubernetes, Filebeat, Logstash, migrating 1100+ gigabytes of data</li>
              <li className="mb-2">Developed CI/CD pipeline with Mage AI using Python pandas, SQL, dbt</li>
            </ul>
          </div>

          {/* Leucine Tech */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <img src="/path/to/leucine-tech-logo.png" alt="Leucine Tech Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-blue-800">Leucine Tech</h3>
                <span className="text-gray-600">June 2024 - August 2024</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">Software Engineering Intern</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li className="mb-2">Designed and implemented PostgreSQL databases for 300+ Pharmaceutical clients</li>
              <li className="mb-2">Improved application stability by debugging, fine-tuning OpenAI's GPT-4 API</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Projects</h2>

          {/* Chess AI Tutor */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Chess AI Tutor - Pawn Up!</h3>
            <p className="text-gray-700 mb-4">Winner Cal Hacks 2024 (UC Berkeley)</p>
            <div className="flex items-center mb-4">
              <img src="/path/to/chess-ai-tutor-image.png" alt="Chess AI Tutor" className="w-32 h-32 mr-4" />
              <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-2">Developed an AI chess training platform using React, Express, Flask</li>
                <li className="mb-2">Engineered semantic chess search using ChromaDB and Gemini embeddings</li>
              </ul>
            </div>
          </div>

          {/* Lift-Link */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Lift-Link</h3>
            <div className="flex items-center mb-4">
              <img src="/path/to/lift-link-image.png" alt="Lift-Link" className="w-32 h-32 mr-4" />
              <ul className="list-disc pl-5 text-gray-600">
                <li className="mb-2">Developed a web app for UCSC students to form ride-sharing groups</li>
                <li className="mb-2">Used TypeScript with Next.js, Prisma, and Postgres for the app</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
