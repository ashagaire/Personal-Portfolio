import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {t("copyright")} {currentYear} Asha Gaire. {t("designAndDevelopedBy")}{" "}
        <a href="http://ashagaire.com.np">ashagaire.com.np</a>
      </p>
    </footer>
  );
};

export default Footer;
