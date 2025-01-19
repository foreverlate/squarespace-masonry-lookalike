import React, { useState, useEffect } from 'react';

    const Header = ({ activeCategory, onCategoryChange }) => {
      const [isSolid, setIsSolid] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsSolid(true);
          } else {
            setIsSolid(false);
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      const handleMobileCategoryChange = (category) => {
        onCategoryChange(category);
        setIsMobileMenuOpen(false);
      };

      return (
        <header className={`header ${isSolid ? 'solid' : ''}`}>
          <div className="container">
            <div className="brand">
              <span className="camera-icon"></span>
              <h1>BeyondJJ</h1>
            </div>
            <nav>
              <ul className="nav-menu">
                <li>
                  <a
                    href="#"
                    onClick={() => onCategoryChange('overview')}
                    className={activeCategory === 'overview' ? 'active' : ''}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => onCategoryChange('portrait')}
                    className={activeCategory === 'portrait' ? 'active' : ''}
                  >
                    Portrait
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => onCategoryChange('landscape')}
                    className={activeCategory === 'landscape' ? 'active' : ''}
                  >
                    Landscape
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => onCategoryChange('travel')}
                    className={activeCategory === 'travel' ? 'active' : ''}
                  >
                    Travel
                  </a>
                </li>
                 <li>
                  <a
                    href="#"
                    onClick={() => onCategoryChange('about')}
                    className={activeCategory === 'about' ? 'active' : ''}
                  >
                    About
                  </a>
                </li>
              </ul>
              <div className="menu-toggle" onClick={handleMenuToggle}>
                ☰
              </div>
            </nav>
            <div className={`nav-menu-mobile ${isMobileMenuOpen ? 'open' : 'closed'}`}>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={() => handleMobileCategoryChange('overview')}
                    className={activeCategory === 'overview' ? 'active' : ''}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleMobileCategoryChange('portrait')}
                    className={activeCategory === 'portrait' ? 'active' : ''}
                  >
                    Portrait
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleMobileCategoryChange('landscape')}
                    className={activeCategory === 'landscape' ? 'active' : ''}
                  >
                    Landscape
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleMobileCategoryChange('travel')}
                    className={activeCategory === 'travel' ? 'active' : ''}
                  >
                    Travel
                  </a>
                </li>
                 <li>
                  <a
                    href="#"
                    onClick={() => handleMobileCategoryChange('about')}
                    className={activeCategory === 'about' ? 'active' : ''}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      );
    };

    export default Header;
