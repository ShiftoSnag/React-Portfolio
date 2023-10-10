import React from 'react';
import '../styles/footerStyles.css'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-icons">
        <a href="https://github.com/ShiftoSnag" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ryan-mattson-002834240/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

      </div>
      <p className='footer-content'>
      </p>
    </div>
  );
}