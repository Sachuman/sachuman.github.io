import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

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

    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .light-beam {
        position: fixed;
        width: 4px;
        background: linear-gradient(180deg, 
          rgba(135, 206, 250, 0),
          rgba(135, 206, 250, 1),
          rgba(135, 206, 250, 0)
        );
        animation: beamFall linear infinite;
        transform-origin: top;
        opacity: 0;
        height: 100vh;
        z-index: 1;
      }

      @keyframes beamFall {
        0% {
          transform: translateY(-100vh);
          opacity: 0;
        }
        20% {
          opacity: var(--beam-opacity);
        }
        80% {
          opacity: var(--beam-opacity);
        }
        100% {
          transform: translateY(100vh);
          opacity: 0;
        }
      }

      .light-beam::after {
        content: '';
        position: absolute;
        top: 0;
        left: -8px;
        right: -8px;
        bottom: 0;
        background: inherit;
        filter: blur(8px);
      }

      .light-beam.bright {
        width: 6px;
        background: linear-gradient(180deg, 
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        );
        box-shadow: 
          0 0 25px 8px rgba(135, 206, 250, 0.8),
          0 0 35px 12px rgba(135, 206, 250, 0.5);
      }

      .light-beam.super-bright {
        width: 8px;
        background: linear-gradient(180deg, 
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        );
        box-shadow: 
          0 0 30px 10px rgba(135, 206, 250, 0.9),
          0 0 40px 15px rgba(135, 206, 250, 0.6),
          0 0 50px 20px rgba(135, 206, 250, 0.3);
      }

      .content-section {
        position: relative;
        background: white;
        z-index: 2;
      }

      .text-block {
        position: relative;
        background: white;
        margin: 1rem 0;
        padding: 1rem;
      }
      
     img:hover {
      z-index: 2;
    }

    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [location]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative bg-white">

      {/*  i say ooo i am blinded by.. lights */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-full fixed">
          {[...Array(30)].map((_, i) => {
            const brightness = Math.random();
            const beamClass = brightness > 0.8 ? 'super-bright' : 
                            brightness > 0.5 ? 'bright' : '';
            const opacity = Math.random() * 0.7 + 0.3;
            
            return (
              <div 
                key={`beam-${i}`} 
                className={`light-beam ${beamClass}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                  '--beam-opacity': opacity
                }}
              />
            );
          })}
        </div>
      </div>

      <Navbar />

      <div className="relative pt-20 ml-[40%] w-[50%] pr-12">
        <section id="work" className="content-section mb-12 pt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 pt-16 pb-8 text-block">Work Experience</h2>
          {/* Nutanix */}
          <div className="text-block mb-6">
            <div className="flex items-center mb-2">
              <img className="w-10 h-10 mr-3 bg-no-repeat bg-cover bg-center bg-[url(../src/img/nutanix.png)]" />
              <div>
                <h3 className="text-lg font-semibold text-blue-800"><a href="https://www.nutanix.com/" target='_blank'>Nutanix</a></h3>
                <span className="text-sm text-gray-600">September 2024 - December 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-base mb-3">Software Developer Capstone</p>
            <div className="text-sm text-gray-600">
            Developed ETL data pipeline utilizing OpenSearch - Kubernetes, Filebeat, Logstash, migrating thousands of gigabytes of
            data into Dremio-Nessie data lake.
            Developed data pipeline with Mage AI using python, SQL, dbt, transforming 1000s JSON files to SQL into
            Dremio data lake integrated with Postgres.
                          
            </div>
          </div>

          {/* Leucine Tech */}
          <div className="text-block mb-6">
            <div className="flex items-center mb-2">
            <img className="w-10 h-10 mr-3 bg-no-repeat bg-cover bg-center bg-[url(../src/img/Leucine.png)]" />
            <div>
            <h3 className="text-lg font-semibold text-blue-800"><a href="https://www.leucine.io/" target='_blank'>Leucine Tech</a></h3>
            <span className="text-sm text-gray-600">June 2024 - August 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-base mb-3">Software Engineering Intern</p>
            <div className="text-sm text-gray-600">
            Designing and implementing PostgreSQL databases, streamlining the data management and improving query performance, reducing application load by 15% for 300+ Pharmaceutical clients
            Improved application st ability by debugging, fine tuning OpenAI's GPT-4 API for converting natural language processing to sql and optimizing Java code, which resolved critical issues improving data processing speed by 25%.
              
            </div>
          </div>

          <div className="text-block mb-6">
            <div className="flex items-center mb-2">
            <img className="w-10 h-10 mr-3 bg-no-repeat bg-cover bg-center bg-[url(../src/img/AIEA.png)]" />
              <div>
              <h3 className="text-lg font-semibold text-blue-800"><a href="https://aiea-lab.github.io/" target='_blank'>AIEA Lab</a></h3>
              <span className="text-sm text-gray-600">September 2024 - Current</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-base mb-3"> Undergrad Researcher</p>
            <div className="text-sm text-gray-600">
             Working on Autonomous Vehicles using various simulators like Carla, with RL Algorithm techniques.
            </div>
          </div>

          <div className="text-block mb-6">
            <div className="flex items-center mb-2">
            <img className="w-10 h-10 mr-3 bg-no-repeat bg-cover bg-center bg-[url(../src/img/computinggrp.png)]" />
              <div>
              <h3 className="text-lg font-semibold text-blue-800"><a href="https://ncg.ucsc.edu/" target='_blank'>Neuromorphic Computing Lab</a></h3>
              <span className="text-sm text-gray-600">March 2024 - September 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-base mb-3"> Undergrad Researcher </p>
            <div className="text-sm text-gray-600">
            Developed a tutorial notebook and authored a report paper on Event-based Lip-reading to assist researchers in understanding a new approach: the Multi-grained Spatio-Temporal Features Perceived Network (MSTP), leveraging Convolutional Recurrent Neural Networks (CRNN).
            </div>
          </div>

          <div className="text-block mb-6">
            <div className="flex items-center mb-2">
            <img className="w-10 h-10 mr-3 bg-no-repeat bg-cover bg-center bg-[url(../src/img/UCSC.png)]" />
              <div>
              <h3 className="text-lg font-semibold text-blue-800"><a href="https://engineering.ucsc.edu/" target='_blank'>Jack Baskin at UCSC</a></h3>
              <span className="text-sm text-gray-600">June 2024 - August 2024</span>
              </div>
            </div>
            <p className="text-black-700 font-bold text-base mb-3">Undergrad Teaching - Group Tutor</p>
            <div className="text-sm text-gray-600">
            Improved course with Professor; office hours for 650+ students, in Abstractions in Python and Assembly in RISC-V.
            Assisted students in understanding Data Structures and Algorithms (DSA) in Python by guided optimization of algorithms, debugging code, explained algorithmic concepts and implementations. (recursion, graphs, hashmaps).
            </div>
          </div>
        </section>

        <section id="projects" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 pt-16 pb-8 text-block">Projects</h2>

          {/* Chess AI Tutor */}
          <div className="text-block mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-800">Chess AI Tutor - Pawn Up!</h3>
              <div className="flex items-center">
                <a href="https://github.com/Sachuman/CalHacks" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img className="w-6 h-6 mr-1 bg-no-repeat bg-cover bg-[url(../src/img/github.png)]"/>
                <span className="text-sm text-gray-600">GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">Winner Cal Hacks 2024 (UC Berkeley) @ChromaDB</p>
            <div className="flex items-center mb-4">
            <img className="w-500 h-40 mr-4 hover:scale-325 object-contain transition-all duration-500 cursor-pointer bg-no-repeat bg-cover bg-[url(../src/img/pawn-up.png)]" />
              <div className="text-sm text-gray-600">
              Developed an AI chess training platform (React, Express, Flask); won CalHacks ChromaDB with 2000+ participants. Engineered semantic chess search using ChromaDB and Gemini embeddings for natural language game queries with
real-time move analysis using Llama 3.1 with Groq for personalized training and puzzle generation. It will be hard to maintain it because of the cost, but its open source and you can host it yourself if you want.
            </div>
            </div>
          </div>

          {/* Neighborly */}
          <div className="text-block mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-800">Neighborly</h3>
              <div className="flex items-center">
                <a href="https://github.com/Sachuman/neighborly" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img className="w-6 h-6 mr-1 bg-no-repeat bg-cover bg-[url(../src/img/github.png)]"/>
                <span className="text-sm text-gray-600">GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">NYU Hacks 2025</p>
            <div className="flex items-center mb-4">
            <img className="w-350 h-40 mr-4 hover:scale-325 object-contain transition-all duration-500 cursor-pointer bg-no-repeat bg-cover bg-[url(../src/img/neighborly.png)]" />
            <div className="text-sm text-gray-600">
              Inspired by Toogoodtogo, at HackNYU 2025, we build neighborly for people to share items, using Mapbox, Gemini 2.0, Next with TypeScript, TailwindCSS.
              Might deploy it in future, but for now it is just a concept. Though it is good concept where you can donate items to your neighbors for a
              small period and take things you need from them for a small period of time.
            </div>
          </div>
          </div>
          
          <div className="text-block mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-800">Lift-Link</h3>
              <div className="flex items-center">
                <a href="https://github.com/Sachuman/LiftLink" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img className="w-6 h-6 mr-1 bg-no-repeat bg-cover bg-[url(../src/img/github.png)]"/>
                <span className="text-sm text-gray-600">GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3"></p>
            <div className="flex items-center mb-4">
            <img className="w-350 h-40 mr-4  hover:scale-325 bg-contain bg-center transition-all duration-500 cursor-pointer bg-no-repeat bg-[url(../src/img/LiftLink.png)]" />
            <div className="text-sm text-gray-600">
               A web app for UCSC students to form ride-sharing groups, saving costs with Uber/Lyft integration. Used TypeScript with Next, Prisma and Postgres (neon) for the app.
               I am still building it, however I am kind of busy with hunting internships, it sucks because between college and applications I only get the weekends and on that I get some other things on my hand.
               Though once I am over with getting/ not getting internships, I will build this within few weeks. 
              </div>
            </div>
          </div>

          {/* Task-Flow */}
          <div className="text-block mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-blue-800">Task-Flow</h3>
              <div className="flex items-center">
                <a href="https://github.com/Sachuman/task-flow" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img className="w-6 h-6 mr-1 bg-no-repeat bg-cover bg-[url(../src/img/github.png)]"/>
                <span className="text-sm text-gray-600">GitHub</span>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3"></p>
            <div className="flex items-center mb-4">
            <img className="w-350 h-40 mr-4 hover:scale-325 bg-center transition-all duration-500 cursor-pointer bg-no-repeat bg-contain bg-[url(../src/img/task-flow.png)]" />
            <div className="text-sm text-gray-600">
              Developed a mobile app in React-Native while learning it, learnt Go as well and used it with MongoDB for Android and iOS focusing neurodivergent audience
              to help them prioritize tasks with unique features like ranking algorithm for tasks, pomodoro timer, statistical task view. Fun stuff, small app but it was fun learning, though in future
              I will try to build something bigger with Go.
            </div>
          </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Portfolio;
