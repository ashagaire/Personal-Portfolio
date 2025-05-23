import React from "react";
import { Link } from "react-scroll";
import LanguageMenu from "./LanguageMenu";

interface NavMobileMenuProps {
  isMenuOpen: boolean;
  navItems: { to: string; label: string }[];
  setIsMenuOpen: (isOpen: boolean) => void;
  isLangEn: boolean;
  changeLanguage: (lng: string) => void;
}

const NavMobileMenu: React.FC<NavMobileMenuProps> = ({
  isMenuOpen,
  navItems,
  setIsMenuOpen,
  isLangEn,
  changeLanguage,
}) => {
  if (!isMenuOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden mt-14 sm:mt-16 md:mt-2018  "
      onClick={() => setIsMenuOpen(false)}
    >
      <div
        className="absolute left-0 right-0 px-2 pt-2  pb-3 space-y-1 bg-[#d92cf9] shadow-lg"
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
            className="text-white block px-3 py-2 rounded-md text-lg cursor-pointer font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <LanguageMenu
          isLangEn={isLangEn}
          changeLanguage={changeLanguage}
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default NavMobileMenu;
