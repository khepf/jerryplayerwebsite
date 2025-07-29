import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
      
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#" className="logo">Jerry Player</a>
            
            {/* Hamburger menu button */}
            <button 
              className="hamburger-menu"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Navigation */}
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <a href="#demo" onClick={closeMobileMenu}>Demo</a>
              <a href="#features" onClick={closeMobileMenu}>Features</a>
              <a href="#screenshots" onClick={closeMobileMenu}>Screenshots</a>
              <a href="#download" onClick={closeMobileMenu}>Download</a>
              <a href="#guide" onClick={closeMobileMenu}>User Guide</a>
              <a href="#donate" onClick={closeMobileMenu}>Donate</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
