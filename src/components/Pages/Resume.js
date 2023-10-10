import React from 'react';
import '../../styles/resumeStyles.css'
import '../../styles/pageStyles.css'
import Graph from '../Graph';




export default function Resume() {

  const pdfUrl = '';

  return (
    <div className='page-container custom-scrollbar'>
      <div>
        <h2 className='page-title'>My Resume</h2>
        <p className='resume-content'>View resume:</p>
        <a className='download-btn' href={pdfUrl} download="">
          Download Resume
        </a>

      </div>
      <div className='graph-container'>
        <h3>Skills</h3>
        <Graph />
      </div>
    </div>
  );
}
