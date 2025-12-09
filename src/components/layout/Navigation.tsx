import React, { useState } from 'react';
import NavBar from './NavBar';
import MobileMenu from './MobileMenu';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavBar 
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      />
    </>
  );
};

export default Navigation;