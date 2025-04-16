import React, { useState, useEffect } from "react";
import { useNavigationItems } from "../../data/navigationItems";

const Notification = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const navItems = useNavigationItems();

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
    </>
  );
};
export default Notification;
