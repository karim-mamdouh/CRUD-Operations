//Scss styling file
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
//Components
import CRUDForm from "./components/CRUDForm/CRUDForm";
import DataTable from "./components/DataTable/DataTable";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const App = () => {
  const { t } = useTranslation();
  //Check previous language preference on app launch
  useEffect(() => {
    let activeLang = localStorage.getItem("i18nextLng");
    if (activeLang) {
      document.documentElement.setAttribute("lang", activeLang);
    }
  }, []);

  return (
    <main>
      <section className="container">
        <h1>CRUD {t("mainTitle")}</h1>
        <LanguageSelector />
        <div className="crud">
          <CRUDForm />
          <DataTable />
        </div>
      </section>
    </main>
  );
};

export default App;
