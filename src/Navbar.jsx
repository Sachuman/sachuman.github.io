import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {

    return (
        <nav className="fixed top-0 w-full z-50">
        <div className="ml-[40%] w-[50%] pr-12 bg-white content-section">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl text-blue-900 pt-4 pb-4 font-bold ">Sachin Jain</Link>
            <div className="flex justify-evenly space-x-6 w-full max-w-md">
              <Link 
                to="/sachumanpage/work" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Work
              </Link>
              <Link 
                to="/sachumanpage/work#projects" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Projects
              </Link>
              <Link 
                to="/sachumanpage/blog" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Blog
              </Link>
              <div className="text-sm text-blue-600 hover:text-blue-800">
                <a href="https://github.com/Sachuman" target="_blank">Github</a>
              </div>
              <div className="text-sm text-blue-600 hover:text-blue-800">
                <a href="https://www.linkedin.com/in/sachin-jain-471540214" target="_blank">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )


}
