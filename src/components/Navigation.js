import React from 'react';
import '../styles/navStyles.css';

function Navigation({ currentPage, handlePageChange }) {

  return (

    <div className="nav-container">
      <ul className="nav-list">

        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
           Me
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            My Portfolio
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Ryans Resume
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>
        </li>

      </ul>
    </div>

  );
}

export default Navigation;