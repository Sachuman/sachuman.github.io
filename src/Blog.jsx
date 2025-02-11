import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Hardware Designing Languages",
      date: "March 15, 2024",
      preview: "Exploring the fascinating world of Hardware Description Languages (HDLs) and their role in modern digital design.",
      content: "Full content of the blog post goes here...",
      readTime: "5 min read",
      tags: ["Hardware", "VHDL", "Digital Design"]
    },

    {
      id: 2,
      title: "Weeknd's new album",
      date: "Feb 11, 2025",
      preview: "Review of Weeknd's new album.",
      content: `
      I was really waiting for this album to drop, I really like weeknd's music prodctions, they are just best quality out of all music I hear.
      I mean the production for Dawn FM was crazy good. I will keep this short and say if you like hip hop, I would highly recommend some songs on
      this album. First is Baptized in Fear, I like the lyrics in this and ofc the production is just insane. Next Open Hearts, make sure you listen
      them together, the transition is great, its made to listen them together. Next is Wake me up, great music and lastly The Abyss. I cant wait to get there gets 
      honorable mention as well. Well that's it, great album overall.

      `,
      readTime: "2 min read",
      tags: ["Music"]
    },
  ];

  return (
    <div className="min-h-screen relative bg-white pb-40">
      <Navbar />

      {/*mapping posts */}
      <section id="blog" className="content-section">
        <div className="relative pt-20 ml-[40%] w-[50%] pr-12">
          {location.pathname === '/sachumanpage/blog' && (
            <>
              <h2 className="text-5xl font-bold text-blue-600 mb-16 pt-16">Blog</h2>
              <div className="space-y-1">
                {blogPosts.map(post => (
                  <div 
                    key={post.id} 
                    className="group cursor-pointer transform transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="mb-2 flex items-center space-x-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {expandedBlog === post.id ? post.content : post.preview}
                    </p>
                    <button
                      onClick={() => setExpandedBlog(expandedBlog === post.id ? null : post.id)}
                      className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                      {expandedBlog === post.id ? '← Show Less' : 'Read More →'}
                    </button>
                    <div className="h-px bg-gray-100 mt-16" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
