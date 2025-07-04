import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Notification from "./childComponents/Notification";
import Logo from "./childComponents/Logo";
import { useNavigationItems } from "../hooks/useNavigationItems";
import MobileMenu from "./childComponents/NavMobileMenu";
import LanguageMenu from "./childComponents/LanguageMenu";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangEn, setIsLangEn] = useState(i18n.language === "fi");
  const navItems = useNavigationItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangEn(lng === "fi");
    setIsMenuOpen(false);
  };

  return (
    <>
      <Notification />
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className=" mx-auto px-4  py-2 sm:py-4 md:py-4 lg:px-10 ">
          <div className="flex items-center justify-between h-10 ">
            <Logo />
            {/* Desktop Menu  */}
            <div className="hidden  lg:flex">
              <div className="ml-4 flex items-center space-x-2 sm:space-x-4  ">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-72}
                    activeClass="active"
                    className="nav-link "
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
            <div className="lg:hidden ">
              <button
                onClick={toggleMenu}
                className="text-[#d92cf9] hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
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
