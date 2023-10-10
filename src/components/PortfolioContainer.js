import React, { useState } from 'react';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './Pages/Resume';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import '../styles/gradientStyles.css';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About setCurrentPage={setCurrentPage} />;
            case 'Portfolio':
                return <Portfolio setCurrentPage={setCurrentPage} />;
            case 'Resume':
                return <Resume setCurrentPage={setCurrentPage} />;
            case 'Contact':
                return <Contact setCurrentPage={setCurrentPage} />;
            default:
                return null;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div>
                <div>
                    {renderPage()}
                </div>
                <div className='App animated-background'>
                    <div className='background-container'></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
