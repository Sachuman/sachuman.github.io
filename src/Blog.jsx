import React, { useState } from 'react';

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Hardware Designing Languages",
      preview: "Interested in HDLs. !",
      content: "",
      featuredImage: "/path/to/featured-image-1.jpg"
    }

  ];

  return (
    <section id="blog" className="mb-16">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{expandedBlog === post.id ? post.content : post.preview}</p>
              <button
                onClick={() => setExpandedBlog(expandedBlog === post.id ? null : post.id)}
                className="text-blue-600 hover:text-blue-800"
              >
                {expandedBlog === post.id ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
