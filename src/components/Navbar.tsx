import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

interface NavItem {
  to: string;
  label: string;
}
const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangEn, setIsLangEn] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const langMenu = () => {
    setIsLangEn(!isLangEn);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangEn(!isLangEn);
  };

  const navItems: NavItem[] = React.useMemo(
    () => [
      { to: "about", label: t("about") },
      { to: "education", label: t("education") },
      { to: "skills", label: t("skills") },
      { to: "experience", label: t("experience") },
      // { to: "projects", label: t("projects") },
      { to: "contact", label: t("contact") },
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
          <div className="flex items-center justify-between h-16">
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
                      {t(item.to)}
                    </Typography>
                  </Link>
                ))}
                {/* Language Menu */}
                <div className=" flex justify-center items-center border-l-2 border-[#d92cf9] pl-2 h-10 cursor-pointer">
                  {isLangEn ? (
                    <ReactCountryFlag
                      countryCode={"FI"}
                      svg
                      style={{
                        width: "40px",
                        height: "30px",
                        objectFit: "contain",
                        borderWidth: "1px",
                      }}
                      onClick={() => changeLanguage("fi")}
                    />
                  ) : (
                    <ReactCountryFlag
                      countryCode={"US"}
                      svg
                      style={{
                        width: "40px",
                        height: "30px",
                        objectFit: "contain",
                        borderWidth: "1px",
                      }}
                      onClick={() => changeLanguage("en")}
                    />
                  )}
                </div>
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
          <div
            className=" fixed inset-0 z-50 bg-black bg-opacity-50  md:hidden"
            style={{ top: "4rem" }}
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="absolute left-0 right-0  px-2 pt-2 pb-3 space-y-1 bg-[#d92cf9] shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white  block px-3 py-2 rounded-md text-lg cursor-pointer font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Language Menu */}
              <div className="  px-3 text-white  block text-lg font-bold cursor-pointer">
                {isLangEn ? (
                  <div className="flex space-x-2">
                    <p> EN</p>
                    <ReactCountryFlag
                      countryCode={"US"}
                      svg
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      onClick={() => changeLanguage("en")}
                    />
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <p> FI </p>
                    <ReactCountryFlag
                      countryCode={"FI"}
                      svg
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      onClick={() => changeLanguage("fi")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
