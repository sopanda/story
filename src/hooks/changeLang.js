import { useTranslation } from "react-i18next";

export const useNewLanguage = () => {
  const { i18n } = useTranslation();
  const setNewLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return setNewLanguage;
};
