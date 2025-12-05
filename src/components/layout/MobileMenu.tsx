import React, { useEffect, useRef, useState } from 'react';
import { homeContent } from '../../content/home';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { navigation } = homeContent;
  const menuRef = useRef<HTMLDivElement>(null);
  const [firstFocusableElement, setFirstFocusableElement] = useState<HTMLElement | null>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Handle focus trap
  useEffect(() => {
    if (isOpen) {
      // Focus the first item when menu opens
      firstFocusableElement?.focus();
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        
        // Tab key focus trap
        if (e.key === 'Tab') {
          const focusableElements = menuRef.current?.querySelectorAll(
            'a[href], button:not([disabled])'
          );
          
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
            
            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              // Tab
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose, firstFocusableElement]);

  const handleLinkClick = (href: string) => {
    // Handle smooth scrolling for anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close menu after navigation
    onClose();
  };

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-strong z-50 md:hidden
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Menu header */}
        <div className="flex items-center justify-between p-4 border-b border-histown-secondary">
          <div className="text-histown-primary font-bold text-xl">
            Menu
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-histown-text hover:text-histown-primary hover:bg-histown-neutral active:text-histown-primary active:bg-histown-neutral/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-histown-primary transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu content */}
        <div className="flex flex-col h-full">
          {/* Navigation links */}
          <nav className="flex-1 px-4 py-6 space-y-2" role="navigation">
            {navigation.menuItems.map((item, index) => {
              // On mobile, treat "Classes" as a simple link to /programs instead of a dropdown
              const isMobileClassesLink = item.label === 'Classes' && item.hasDropdown;
              
              return (
                <div key={item.label}>
                  {item.hasDropdown && !isMobileClassesLink ? (
                    <>
                      <button
                        ref={index === 0 ? setFirstFocusableElement : undefined}
                        onClick={() => toggleExpanded(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-histown-text hover:text-histown-primary hover:bg-histown-neutral active:text-histown-primary active:bg-histown-neutral/80 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                      >
                        {item.label}
                        <svg
                          className={`h-5 w-5 transition-transform duration-200 ${
                            expandedItems.includes(item.label) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedItems.includes(item.label) && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems && item.dropdownItems.length > 0 ? (
                            item.dropdownItems.map((dropdownItem) => (
                              <a
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                onClick={(e) => {
                                  if (dropdownItem.href.startsWith('#')) {
                                    e.preventDefault();
                                    handleLinkClick(dropdownItem.href);
                                  } else {
                                    onClose();
                                  }
                                }}
                                className="block px-4 py-2 text-base text-histown-text hover:text-histown-primary hover:bg-histown-neutral active:text-histown-primary active:bg-histown-neutral/80 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                              >
                                {dropdownItem.label}
                              </a>
                            ))
                          ) : (
                            <div className="px-4 py-2 text-histown-text-muted text-sm">
                              Coming soon...
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      ref={index === 0 && !navigation.menuItems.some(i => i.hasDropdown && i.label !== 'Classes') ? setFirstFocusableElement : undefined}
                      href={isMobileClassesLink ? '/programs' : item.href}
                      onClick={(e) => {
                        const targetHref = isMobileClassesLink ? '/programs' : item.href;
                        if (targetHref.startsWith('#')) {
                          e.preventDefault();
                          handleLinkClick(targetHref);
                        } else {
                          onClose();
                        }
                      }}
                      className="block px-4 py-3 text-lg font-medium text-histown-text hover:text-histown-primary hover:bg-histown-neutral active:text-histown-primary active:bg-histown-neutral/80 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* CTA buttons */}
          <div className="px-4 py-6 border-t border-histown-secondary space-y-3">
            <a
              href={navigation.freeTrialHref}
              onClick={() => onClose()}
              className="block w-full text-center btn-primary"
            >
              Free Trial
            </a>
            <a
              ref={lastFocusableRef}
              href={navigation.externalLogin.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onClose()}
              className="block w-full text-center border-2 border-histown-primary text-histown-primary hover:bg-histown-primary hover:text-white active:bg-histown-primary-dark active:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-histown-primary focus:ring-offset-2"
            >
              {navigation.externalLogin.label}
              <span className="sr-only">(opens in new window)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;