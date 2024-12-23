import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const storedLanguage = localStorage.getItem("lang") || "fr";
  const [lang, setLang] = useState(storedLanguage);

  useEffect(() => {
    if (i18n.language !== lang) {
      // show language stocked into localStorage or fr
      i18n.changeLanguage(lang);
      // register into localStorage language
      localStorage.setItem("lang", lang);
    }

    // update when language change
  }, [lang, i18n]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return { lang, toggleLanguage };
};
