import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './Portfolio'
import Home from './Home';
import Blog from './Blog'
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sachumanpage" element={<Home />} />
        <Route path="/sachumanpage/work" element={<Portfolio />} />
        <Route path="/sachumanpage/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App