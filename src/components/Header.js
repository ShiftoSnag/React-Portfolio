import React from 'react';
import '../styles/headerStyles.css'
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className="header-container">
      <h1>Ryan Mattson</h1>

      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}