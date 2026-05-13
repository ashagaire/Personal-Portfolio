import React, { useState } from "react";
import { Link } from "react-scroll";
import LanguageMenu from "./LanguageMenu";

interface NavMobileMenuProps {
  isMenuOpen: boolean;
  navItems: { to: string; label: string }[];
  isLangEn: boolean;
  changeLanguage: (lng: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  isMenuOpen,
  navItems,
  isLangEn,
  changeLanguage,
  setIsMenuOpen,
}) => {
  
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[50] mt-16 lg:hidden bg-black/20 backdrop-blur-sm"
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className="absolute left-0 right-0 bg-background border-b shadow-xl px-4 py-6 space-y-4"
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
        <div className="px-3 py-2">
          <LanguageMenu isLangEn={isLangEn} changeLanguage={changeLanguage} isMobile={true} />
        </div>
      </div>
    </div>
  );
};

export default NavMobileMenu;
