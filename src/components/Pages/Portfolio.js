import React from 'react';
import '../../styles/portfolioStyles.css';
import '../../styles/pageStyles.css';
import Project from '../Project.js';

export default function Portfolio() {

  const projects = [
    // First Group Project Under Adam Hansen as he was the Repo Owner
    {
      title: 'FilmEthica',
      githubLink: 'https://github.com/adamhansen184/filmetheca',
      websiteLink: 'https://adamhansen184.github.io/filmetheca/',
    },
  
  ];


  return (
    <div className="page-container custom-scrollbar">
      <h2 className="page-title">My Portfolio</h2>
      <div className="portfolio-content">
        {/* map project array */}
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}