import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-cover bg-[url(../src/img/enjoy.png)]  flex items-center justify-between px-160 pb-60">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 mb-22">Sachin Jain</h1>
        <div className="space-x-48">
          <Link to="/sachumanpage/work" className="text-green-700 hover:text-blue-800 text-5xl">Experience</Link>
          <Link to="/sachumanpage/blog" className="text-red-400 hover:text-blue-800 text-5xl">Blog</Link>
        </div>
        </div>
      <div className="flex items-center justify-center">
        <img className="w-68 h-68 rounded-full border-4 border-blue-600 bg-cover bg-[url(../src/img/profile.png)] " />
      </div>
    </div>
  );
};

export default Home;
