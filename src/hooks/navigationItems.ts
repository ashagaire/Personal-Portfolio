import { NavItem } from "../utils/types";
import { useTranslation } from "react-i18next";

export const useNavigationItems = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    { to: "about", label: t("about") },
    { to: "education", label: t("education") },
    { to: "skills", label: t("skills") },
    { to: "experience", label: t("experience") },
    // { to: "projects", label: t("projects") },
    { to: "contact", label: t("contact") },
  ];
};
