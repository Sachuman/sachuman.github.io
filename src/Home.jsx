import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-[url(../src/img/enjoy.png)]  flex items-center justify-between px-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-22">Sachin Jain</h1>
        <div className="space-x-6">
          <Link to="/sachumanpage/work" className="text-blue-600 hover:text-blue-800 text-xl">Experience</Link>
          <Link to="/sachumanpage/blog" className="text-blue-600 hover:text-blue-800 text-xl">Blog</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="../src/img/image.png" alt="Sachin Jain" className="w-48 h-48 rounded-full border-4 border-blue-600" />
      </div>
    </div>
  );
};

export default Home;
