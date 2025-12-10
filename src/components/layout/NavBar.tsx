import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeContent } from '../../content/home';

interface NavBarProps {
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onMobileMenuToggle, isMobileMenuOpen }) => {
  const { navigation } = homeContent;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isInsideDropdown = Object.values(dropdownRefs.current).some(ref =>
        ref && ref.contains(target)
      );

      if (!isInsideDropdown) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative" style={{ minHeight: '70px' }}>

          {/* Logo - Left Side */}
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center" aria-label="HisTown Dance Studio Home">
              <img
                src={navigation.logo.src}
                alt={navigation.logo.alt}
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                style={{
                  marginTop: '-15px',
                  marginBottom: '-15px',
                  imageRendering: 'auto',
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              />
            </Link>
          </div>

          {/* Centered Navigation - Desktop Only */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-6">
              {navigation.menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  ref={(el) => { dropdownRefs.current[item.label] = el; }}
                >
                  {item.hasDropdown ? (
                    item.href.startsWith('#') ? (
                      <button
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        className="flex items-center text-gray-700 hover:text-histown-primary font-medium text-lg tracking-wide uppercase transition-colors duration-300 py-2"
                      >
                        {item.label}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        className="flex items-center text-gray-700 hover:text-histown-primary font-medium text-lg tracking-wide uppercase transition-colors duration-300 py-2"
                      >
                        {item.label}
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                    )
                  ) : (
                    item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        onMouseEnter={() => setOpenDropdown(null)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.href);
                        }}
                        className="text-gray-700 hover:text-histown-primary font-medium text-lg tracking-wide uppercase transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </a>
                    ) : item.href.startsWith('http') ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setOpenDropdown(null)}
                        className="text-gray-700 hover:text-histown-primary font-medium text-lg tracking-wide uppercase transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        onMouseEnter={() => setOpenDropdown(null)}
                        className="text-gray-700 hover:text-histown-primary font-medium text-lg tracking-wide uppercase transition-colors duration-300 py-2"
                      >
                        {item.label}
                      </Link>
                    )
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === item.label && (
                    <div
                      className={`absolute top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 z-50 ${item.megaMenu ? 'w-screen max-w-3xl' : 'min-w-48 left-0'
                        } animate-fade-in`}
                      onMouseLeave={() => setOpenDropdown(null)}
                      style={{
                        willChange: 'opacity',
                        backfaceVisibility: 'hidden',
                        WebkitFontSmoothing: 'antialiased',
                        transformOrigin: 'top left',
                        ...(item.megaMenu ? { left: '-8rem' } : {})
                      }}
                    >
                      {item.megaMenu ? (
                        <div className="p-6 bg-white">
                          <div className="grid grid-cols-2 gap-0">
                            {item.megaMenu.columns.map((column, columnIndex) => (
                              <div
                                key={column.title}
                                className={`${column.title === 'MUSIC & FEATURED' ? 'space-y-0' : 'space-y-4'}`}
                              >
                                {column.title !== 'MUSIC & FEATURED' && (
                                  <div className="relative">
                                    {column.title === 'DANCE' ? (
                                      <Link
                                        to="/classes/dance"
                                        onClick={() => setOpenDropdown(null)}
                                        className="flex items-center space-x-2 mb-3 group hover:opacity-80 transition-opacity duration-200"
                                      >
                                        <div className="w-6 h-6 bg-histown-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                          </svg>
                                        </div>
                                        <h3 className="text-histown-primary font-bold text-lg tracking-wider uppercase">
                                          {column.title}
                                        </h3>
                                      </Link>
                                    ) : (
                                      <div className="flex items-center space-x-2 mb-3">
                                        <h3 className="text-histown-primary font-bold text-lg tracking-wider uppercase">
                                          {column.title}
                                        </h3>
                                      </div>
                                    )}
                                    <div className="h-0.5 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full"></div>
                                  </div>
                                )}

                                <div className="space-y-1">
                                  {column.items?.map((menuItem, itemIndex) => (
                                    <a
                                      key={menuItem.label}
                                      href={menuItem.href}
                                      onClick={(e) => {
                                        if (menuItem.href.startsWith('#')) {
                                          e.preventDefault();
                                          handleLinkClick(menuItem.href);
                                        }
                                      }}
                                      className="group flex items-center space-x-2 text-base text-gray-700 hover:text-histown-primary hover:bg-gray-50 rounded px-3 py-2 transition-colors duration-150"
                                    >
                                      <div className="w-1 h-1 bg-histown-secondary rounded-full group-hover:bg-histown-primary transition-colors duration-150"></div>
                                      <span className="text-base">
                                        {menuItem.label}
                                      </span>
                                      <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                      </svg>
                                    </a>
                                  ))}
                                </div>

                                {column.sections && (
                                  <div className="space-y-4">
                                    {column.sections.map((section, sectionIndex) => (
                                      <div key={section.subtitle}>
                                        {section.subtitle === 'MUSIC' ? (
                                          <Link
                                            to="/classes/music"
                                            onClick={() => setOpenDropdown(null)}
                                            className="flex items-center space-x-2 mb-3 group hover:opacity-80 transition-opacity duration-200"
                                          >
                                            <div className="w-6 h-6 bg-histown-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z"/>
                                              </svg>
                                            </div>
                                            <h4 className="text-histown-primary font-bold text-lg tracking-wider uppercase">
                                              {section.subtitle}
                                            </h4>
                                          </Link>
                                        ) : section.subtitle === 'FEATURED' ? (
                                          <Link
                                            to="/classes/featured"
                                            className="flex items-center space-x-2 mb-3 hover:opacity-80 transition-opacity"
                                            onClick={() => setOpenDropdown(null)}
                                          >
                                            <div className="w-6 h-6 ml-1 bg-gradient-to-r from-histown-primary to-histown-accent rounded-full flex items-center justify-center flex-shrink-0">
                                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                              </svg>
                                            </div>
                                            <h4 className="text-histown-primary font-bold text-lg tracking-wider uppercase">
                                              {section.subtitle}
                                            </h4>
                                          </Link>
                                        ) : (
                                          <div className="flex items-center space-x-2 mb-3">
                                            <h4 className="text-histown-primary font-bold text-lg tracking-wider uppercase">
                                              {section.subtitle}
                                            </h4>
                                          </div>
                                        )}
                                        <div className="h-0.5 bg-gradient-to-r from-histown-primary via-histown-accent to-transparent rounded-full mb-3"></div>

                                        <div className="space-y-1">
                                          {section.items.map((menuItem, itemIndex) => (
                                            menuItem.href.startsWith('#') ? (
                                              <a
                                                key={menuItem.label}
                                                href={menuItem.href}
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleLinkClick(menuItem.href);
                                                }}
                                                className="group flex items-center space-x-2 text-base text-gray-700 hover:text-histown-primary hover:bg-gray-50 rounded px-3 py-2 transition-colors duration-150"
                                              >
                                                <div className="w-1 h-1 bg-histown-secondary rounded-full group-hover:bg-histown-primary transition-colors duration-150"></div>
                                                <span className="text-base">
                                                  {menuItem.label}
                                                </span>
                                                <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" fill="currentColor" viewBox="0 0 24 24">
                                                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                                </svg>
                                              </a>
                                            ) : (
                                              <Link
                                                key={menuItem.label}
                                                to={menuItem.href}
                                                onClick={() => setOpenDropdown(null)}
                                                className="group flex items-center space-x-2 text-base text-gray-700 hover:text-histown-primary hover:bg-gray-50 rounded px-3 py-2 transition-colors duration-150"
                                              >
                                                <div className="w-1 h-1 bg-histown-secondary rounded-full group-hover:bg-histown-primary transition-colors duration-150"></div>
                                                <span className="text-base">
                                                  {menuItem.label}
                                                </span>
                                                <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" fill="currentColor" viewBox="0 0 24 24">
                                                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                                </svg>
                                              </Link>
                                            )
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                    
                                    {column.title === 'MUSIC & FEATURED' && (
                                      <div className="mt-6">
                                        <div className="bg-gradient-to-r from-histown-primary to-histown-accent rounded-lg p-4 text-white text-center">
                                          <p className="font-semibold text-sm mb-3">Ready to Start Your Journey?</p>
                                          <div className="flex flex-col space-y-2">
                                            <a href="/free-trial" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm font-medium transition-all duration-200 hover:scale-105">
                                              Free Trial
                                            </a>
                                            <a href="/contact" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm font-medium transition-all duration-200 hover:scale-105">
                                              Contact Us
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}

                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 bg-white">
                          {item.dropdownItems && item.dropdownItems.length > 0 ? (
                            item.dropdownItems.map((dropdownItem, itemIndex) => (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                target={dropdownItem.href.startsWith('http') ? '_blank' : undefined}
                                rel={dropdownItem.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                onClick={(e) => {
                                  if (dropdownItem.href.startsWith('#')) {
                                    e.preventDefault();
                                    handleLinkClick(dropdownItem.href);
                                  }
                                }}
                                className="group flex items-center space-x-2 text-base text-gray-700 hover:text-histown-primary hover:bg-gray-50 rounded px-3 py-2 transition-colors duration-150 whitespace-nowrap"
                              >
                                <div className="w-1 h-1 bg-histown-secondary rounded-full group-hover:bg-histown-primary transition-colors duration-150"></div>
                                <span className="text-base">
                                  {dropdownItem.label}
                                </span>
                                <svg className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                </svg>
                              </a>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-gray-400 text-sm">
                              Coming soon...
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Social Icons & Buttons */}
          <div className="hidden lg:flex items-center space-x-4" style={{ overflow: 'visible', padding: '8px' }}>
            {/* Social Icons - Hidden on smaller screens */}
            <div className="hidden md:flex items-center space-x-3">
              {navigation.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.platform} page`}
                  className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 hover:text-histown-primary hover:border-histown-primary transition-colors duration-300"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  {social.platform === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.platform === 'facebook' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <button
              onClick={() => window.location.href = navigation.freeTrialHref}
              className="bg-gradient-to-r from-histown-accent to-histown-primary text-white px-6 py-3 rounded text-sm font-bold tracking-wide uppercase transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              FREE TRIAL
            </button>
            <a
              href={navigation.externalLogin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-gray-700 hover:text-histown-primary text-lg font-medium tracking-wide uppercase transition-colors duration-300"
              style={{ minHeight: '44px', display: 'flex', alignItems: 'center' }}
            >
              {navigation.externalLogin.label}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={onMobileMenuToggle}
              className="p-3 rounded-md text-gray-700 hover:text-histown-primary transition-colors duration-300"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;