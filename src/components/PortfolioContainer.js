import React, { useState } from 'react';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
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
