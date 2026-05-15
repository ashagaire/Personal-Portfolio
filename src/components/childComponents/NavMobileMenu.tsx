import React, { useState } from "react";
import { Link } from "react-scroll";
import LanguageMenu from "./LanguageMenu";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
interface NavMobileMenuProps {
  isMenuOpen: boolean;
  navItems: { to: string; label: string }[];
  isLangEn: boolean;
  toggle: () => void;
  theme: string;
  changeLanguage: (lng: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  isMenuOpen,
  navItems,
  isLangEn,
  toggle,
  theme,
  changeLanguage,
  setIsMenuOpen,
}) => {
  
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[50] mt-14 lg:hidden bg-black/20 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className="absolute left-0 right-0 bg-background border-b shadow-xl px-4 pt-4 pb-2 space-y-1"
        onClick={(e) => e.stopPropagation()}
      >
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-55}
            spy={true}
            className="text-foreground font-medium transition-colors block px-3 py-2 rounded-md text-lg cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          <hr className="w-full border-t text-muted-foreground"/>

          </Link>
        ))}
          <LanguageMenu  isLangEn={isLangEn} changeLanguage={changeLanguage} isMobile={true} />
        <Button
                variant="ghost"
                size="icon"
                onClick={toggle}
                aria-label="Toggle theme"
                className="h-9 w-9 "
              >
                {theme === "dark" ? <Sun className="h-4 w-4  " /> : <Moon className="h-4 w-4" />}
              </Button>
      </div>
    </div>
  );
};

export default NavMobileMenu;
