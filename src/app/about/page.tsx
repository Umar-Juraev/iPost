import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="mb-6">This is the about page where you can learn more about our company and services.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700">
            We strive to provide innovative solutions that make a real difference in people&apos;s lives.
            Our goal is to create products that are both user-friendly and powerful.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Our Team</h2>
          <p className="text-gray-700">
            Our team consists of passionate professionals dedicated to excellence.
            We work together to deliver the best possible experience for our users.
          </p>
        </div>
      </div>
    </div>
  );
} 
