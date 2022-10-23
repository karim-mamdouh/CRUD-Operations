//Localization
import { useTranslation } from "react-i18next";
//Styling file
import "./LanguageSelector.scss";

const LanguageSelector = () => {
  const lngs = {
    en: { nativeName: "English" },
    ar: { nativeName: "العربيه" },
  };

  const { i18n } = useTranslation();

  return (
    <div className="lng-selector">
      {Object.keys(lngs).map((lng) => (
        <button
          className="btn"
          key={lng}
          type="submit"
          disabled={i18n.language === lng}
          onClick={() => {
            i18n.changeLanguage(lng);
            document.documentElement.setAttribute("lang", lng);
          }}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
