import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Notification from "./childComponents/Notification";
import { useNavigationItems } from "../hooks/useNavigationItems";
import MobileMenu from "./childComponents/NavMobileMenu";
import LanguageMenu from "./childComponents/LanguageMenu";
import { site } from "../lib/site";
import { Button } from "./ui/button";

const Navbar = () => {
  const { i18n, t } = useTranslation();
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
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex cursor-pointer items-center gap-2.5 font-display text-lg font-medium tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-white text-xs font-mono shadow-md">
              {site.initials}
            </span>
            <span>{site.name}</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-72}
                activeClass="text-foreground"
                className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.to)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <LanguageMenu isLangEn={isLangEn} changeLanguage={changeLanguage} />
              <Link to="contact" smooth={true} duration={500} offset={-72} className="cursor-pointer">
                <Button className="gradient-brand text-white border-0 hover:opacity-90">
                  Hire me
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center justify-end space-x-2">
              <LanguageMenu isLangEn={isLangEn} changeLanguage={changeLanguage} isMobile={true} />
              <button
                onClick={toggleMenu}
                className="text-[#d92cf9] hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu - Shown when menu is open */}
        <MobileMenu isMenuOpen={isMenuOpen} navItems={navItems} setIsMenuOpen={setIsMenuOpen} />
      </header>
    </>
  );
};

export default Navbar;
