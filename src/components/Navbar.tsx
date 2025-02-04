// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";

const Navbar = () => {
  interface NavItem {
    to: string;
    label: string;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems: NavItem[] = React.useMemo(
    () => [
      { to: "about", label: "About" },
      { to: "education", label: "Education" },
      { to: "skills", label: "Skills" },
      { to: "experience", label: "Experience" },
      // { to: "projects", label: "Projects" },
      { to: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.to));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  useEffect(() => {
    if (activeSection) {
      setShowNotification(true);
      const timeoutId = setTimeout(() => {
        setShowNotification(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [activeSection]);

  return (
    <>
      {/* Notification for active section */}
      {showNotification && activeSection && (
        <div className="md:hidden fixed top-24 right-4 bg-[#d92cf9] text-white text-sm p-2 rounded shadow-lg h-8 flex items-center justify-center">
          {navItems.find((item) => item.to === activeSection)?.label}
        </div>
      )}
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
                  src={require("../assets/signature.png")}
                  alt="Asha Signature"
                  className="w-full h-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu  */}
            <div className="hidden md:block">
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
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "18px",
                          md: "20px",
                          lg: "24px",
                        },
                        fontWeight: 800,
                        fontFamily: "Ubuntu, sans-serif",
                      }}
                    >
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
                className="text-[#d92cf9] hover:text-purple-600 focus:outline-none"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#d92cf9] shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white hover:bg-[#800101] block px-3 py-2 rounded-md text-lg cursor-pointer font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
