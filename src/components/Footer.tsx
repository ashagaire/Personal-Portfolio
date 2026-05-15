import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center p-5 border border-border bg-surface">
      <p>
        © {t("copyright")} {currentYear} Asha Gaire. {t("designAndDevelopedBy")}{" "}
        <a href="http://ashagaire.com.np">ashagaire.com.np</a>
      </p>
    </footer>
  );
};

export default Footer;
