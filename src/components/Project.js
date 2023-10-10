import React from 'react';
import '../styles/projectStyles.css';

const Project = ({ title, imageUrl, githubLink, websiteLink }) => {
  return (
    <div className="project">
      <div className='project-container'>
        <img src={imageUrl} alt={title} className="project-image" />
        <div className='overlay-container'>

          <div className="overlay">

          </div>

          <h3 className='project-title'>{title}</h3>

          <div className="project-buttons">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-button">
              My Github
            </a>
            {websiteLink ? (
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="website-button">
                my site
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;