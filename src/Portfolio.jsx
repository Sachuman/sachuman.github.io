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
            <div className="flex justify-evenly space-x-6 w-full max-w-md">
              <Link to="/sachumanpage/work" onClick={() => scrollToSection('work')} className="text-blue-600 hover:text-blue-800">Work</Link>
              <Link to="/sachumanpage/work#projects" onClick={() => scrollToSection('projects')} className="text-blue-600 hover:text-blue-800">Projects</Link>
              <div className="text-blue-600 hover:text-blue-800"><a href="https://github.com/Sachuman" target="_blank">Github</a></div>
              <div className="text-blue-600 hover:text-blue-800"><a href="https://www.linkedin.com/in/sachin-jain-471540214" target="_blank">LinkedIn</a></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 max-w-5xl mx-auto px-4">
        <section id="work" className="mb-16">
          <h2 className="text-7xl font-bold text-blue-600 mb-8 pt-20 pb-10">Work Experience</h2>
          {/* Nutanix */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <img className="w-12 h-12 mr-4  bg-no-repeat bg-cover bg-center bg-[url(../src/img/nutanix.png)] " />
              <div>
                <h3 className="text-xl font-semibold text-blue-800"><a href="https://www.nutanix.com/" target='_blank'>Nutanix</a></h3>
                <span className="text-gray-600">September 2024 - December 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-lg mb-4">Software Developer Capstone</p>
            <div className="list-disc text-gray-600">
            Developed ETL data pipeline utilizing OpenSearch - Kubernetes, Filebeat, Logstash, migrating thousands of gigabytes of
            data into Dremio-Nessie data lake.
            Developed data pipeline with Mage AI using python, SQL, dbt, transforming 1000s JSON files to SQL into
            Dremio data lake integrated with Postgres.
                          
            </div>
          </div>

          {/* Leucine Tech */}
          <div className="mb-8">
            <div className="flex items-center mb-2">
            <img className="w-12 h-12 mr-4  bg-no-repeat bg-cover bg-center bg-[url(../src/img/Leucine.png)] " />
            <div>
            <h3 className="text-xl font-semibold text-blue-800"><a href="https://www.leucine.io/" target='_blank'>Leucine Tech</a></h3>
            <span className="text-gray-600">June 2024 - August 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-lg mb-4">Software Engineering Intern</p>
            <div className="list-disc text-gray-600">
            Designing and implementing PostgreSQL databases, streamlining the data management and improving query performance, reducing application load by 15% for 300+ Pharmaceutical clients
            Improved application stability by debugging, fine tuning OpenAI’s GPT-4 API for converting natural language processing to sql and optimizing Java code, which resolved critical issues improving data processing speed by 25%.
              
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
            <img className="w-12 h-12 mr-4  bg-no-repeat bg-cover bg-center bg-[url(../src/img/AIEA.png)] " />
              <div>
              <h3 className="text-xl font-semibold text-blue-800"><a href="https://aiea-lab.github.io/" target='_blank'>AIEA Lab</a></h3>
              <span className="text-gray-600">September 2024 - Current</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-lg mb-4"> Undergrad Researcher</p>
            <div className="list-disc text-gray-600">
             Working on Autonomous Vehicles using various simulators like Carla, with RL Algorithm techniques.
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
            <img className="w-12 h-12 mr-4  bg-no-repeat bg-cover bg-center bg-[url(../src/img/computinggrp.png)] " />
              <div>
              <h3 className="text-xl font-semibold text-blue-800"><a href="https://ncg.ucsc.edu/" target='_blank'>Neuromorphic Computing Lab</a></h3>
              <span className="text-gray-600">March 2024 - September 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-lg mb-4"> Undergrad Researcher </p>
            <div className="list-disc text-gray-600">
            Developed a tutorial notebook and authored a report paper on Event-based Lip-reading to assist researchers in understanding a new approach: the Multi-grained Spatio-Temporal Features Perceived Network (MSTP), leveraging Convolutional Recurrent Neural Networks (CRNN).
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
            <img className="w-12 h-12 mr-4  bg-no-repeat bg-cover bg-center bg-[url(../src/img/UCSC.png)] " />
              <div>
              <h3 className="text-xl font-semibold text-blue-800"><a href="https://engineering.ucsc.edu/" target='_blank'>Jack Baskin at UCSC</a></h3>
              <span className="text-gray-600">June 2024 - August 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-lg mb-4">Undergrad Teaching - Group Tutor</p>
            <div className="list-disc text-gray-600">
            Improved course with Professor; office hours for 650+ students, in Abstractions in Python and Assembly in RISC-V.
            Assisted students in understanding Data Structures and Algorithms (DSA) in Python by guided optimization of algorithms, debugging code, explained algorithmic concepts and implementations. (recursion, graphs, hashmaps).
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-7xl font-bold text-blue-600 mb-8 pt-20 pb-10">Projects</h2>

          {/* Chess AI Tutor */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Chess AI Tutor - Pawn Up!</h3>
            <p className="text-gray-700 mb-4">Winner Cal Hacks 2024 (UC Berkeley) @ChromaDB</p>
            <div className="flex items-center mb-4">
              <img src="/path/to/chess-ai-tutor-image.png" alt="Chess AI Tutor" className="w-32 h-32 mr-4" />
              <div className="list-disc text-gray-600">
              Developed an AI chess training platform (React, Express, Flask); won CalHacks ChromaDB with 2000+ participants. Engineered semantic chess search using ChromaDB and Gemini embeddings for natural language game queries with
real-time move analysis using Llama 3.1 with Groq for personalized training and puzzle generation.
            </div>
            </div>
          </div>

          {/* Lift-Link */}
          <div className="mb-8">
            <h3 className="text-xl flex font-semibold text-blue-800 mb-2">Lift-Link </h3> <a>Github</a>
            <div className="flex items-center mb-4">
              <img src="/path/to/lift-link-image.png" alt="Lift-Link" className="w-32 h-32 mr-4" />
              <div className="list-disc text-gray-600">
               A web app for UCSC students to form ride-sharing groups, saving costs with Uber/Lyft integration. Used TypeScript with Next, Prisma and Postgres (neon) for the app.
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Task-Flow</h3>
            <div className="flex items-center mb-4">
              <img src="/path/to/lift-link-image.png" alt="Lift-Link" className="w-32 h-32 mr-4" />
              <div className="list-disc text-gray-600">
              Developed a mobile app with React-Native, Go and MongoDB for Android and iOS focusing neurodivergent audience
              to help them prioritize tasks with unique features like ranking algorithm for tasks, pomodoro timer, statistical task view.
            </div>
          </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Portfolio;
