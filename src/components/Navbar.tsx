import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import Notification from "./childComponents/Notification";
import { useNavigationItems } from "../hooks/useNavigationItems";
import MobileMenu from "./childComponents/NavMobileMenu";
import LanguageMenu from "./childComponents/LanguageMenu";
import { site } from "../lib/site";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangEn, setIsLangEn] = useState(i18n.language === "fi");
  const navItems = useNavigationItems();
  const { theme, toggle } = useTheme();

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
        <div className="container-page flex h-14 lg:h-20 items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex cursor-pointer items-center gap-2.5 font-display text-lg font-medium tracking-tight"
          >
            {/* <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-white text-xs font-mono shadow-md">
              {site.initials}
            </span> */}
            <span className="lg:text-3xl text-2xl font-['Bungee Shade'] text-gradient-brand">{site.name}</span>
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
               <Button
                variant="ghost"
                size="icon"
                onClick={toggle}
                aria-label="Toggle theme"
                className="h-9 w-9"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <LanguageMenu isLangEn={isLangEn} changeLanguage={changeLanguage} />
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center justify-end space-x-2">
              <button
                onClick={toggleMenu}
                className="text-[#d92cf9] hover:text-purple-600 focus:outline-none"
              >
                {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
              </button>
            </div>
          </div>
        </div>
       </header>
        {/* Mobile Menu - Shown when menu is open */}
        <MobileMenu isMenuOpen={isMenuOpen} navItems={navItems} setIsMenuOpen={setIsMenuOpen} isLangEn={isLangEn} changeLanguage={changeLanguage} toggle={toggle} theme={theme} />
      
    </>
  );
};

export default Navbar;
