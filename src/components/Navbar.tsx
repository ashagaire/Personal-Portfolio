import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import Notification from "./childComponents/Notification";
import Logo from "./childComponents/Logo";
import { useNavigationItems } from "../data/navigationItems";
import MobileMenu from "./childComponents/NavMobileMenu";
import LanguageMenu from "./childComponents/LanguageMenu";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangEn, setIsLangEn] = useState(true);
  const navItems = useNavigationItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangEn(!isLangEn);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Notification for active section */}
      <Notification />
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand  */}
            <Logo />
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
                <LanguageMenu
                  isLangEn={isLangEn}
                  changeLanguage={changeLanguage}
                />
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
        <MobileMenu
          isMenuOpen={isMenuOpen}
          navItems={navItems}
          setIsMenuOpen={setIsMenuOpen}
          isLangEn={isLangEn}
          changeLanguage={changeLanguage}
        />
      </nav>
    </>
  );
};

export default Navbar;
