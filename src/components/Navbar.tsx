// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-scroll';
import { Typography } from '@mui/material';

const Navbar = () => {
  
  interface NavItem {
    to: string;
    label: string;
  }
  
  const navItems: NavItem[] = [
    { to: "about", label: "About" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
    { to: "experience", label: "Experience" },
    // { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand  */}
          <div className="flex-shrink-0 max-w-[60px]  sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px]">
            <Link 
              to="asha" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="cursor-pointer text-[#d92cf9] hover:text-purple-600"
            >
              <img 
                src={require('../assets/signature.png')} 
                alt="Asha Signature" 
                className="w-full h-auto" // Full width and auto height
              />
            </Link>
          </div>

          {/* Desktop Menu  */}
          <div className=" md:block">
            <div className="ml-4 flex items-center space-x-2 sm:space-x-4 md:space-x-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-[#d92cf9] hover:text-purple-600 cursor-pointer"
                >
                  <Typography variant="body1" sx={{ fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '24px' } , fontWeight: 500,
                  fontFamily: 'Ubuntu, sans-serif'}}> 
                    {item.label} 
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          
          
        </div>
      </div>

      {/* Mobile Menu - Removed mobile menu logic */}
    </nav>
  );
};

export default Navbar;
