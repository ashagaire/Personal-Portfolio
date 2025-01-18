// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  interface NavItem {
    to: string;
    label: string;
  }
  
  const navItems: NavItem[] = [
    { to: "about", label: "About" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#9b0101] shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand - Always visible */}
          <div className="flex-shrink-0">
            <Link 
              to="asha" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="text-white cursor-pointer hover:text-gray-200"
            >
              <Typography variant="h4" sx={{ 
                  fontSize: { xs: '24px', sm: '28px', md: '40px' },
                  fontWeight: 900,
                  fontFamily: 'Ubuntu, sans-serif'
                }}> 
                Asha 
              </Typography>
            </Link>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white hover:text-gray-200 cursor-pointer"
                >
                  <Typography variant="body1" sx={{ fontSize: { xs: '16px', sm: '18px', md: '24px' } , fontWeight: 500,
                  fontFamily: 'Ubuntu, sans-serif'}}> 
                    {item.label} 
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#9b0101] shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white hover:bg-[#800101] block px-3 py-2 rounded-md text-base cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
