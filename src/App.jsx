//React
import React from "react";
//Scss styling file
import "./App.scss";
//Components
import CRUDForm from "./components/CRUDForm/CRUDForm";
import DataTable from "./components/DataTable/DataTable";

const App = () => {
  return (
    <>
      <main>
        <section className="container">
          <h1>CRUD Operations</h1>
          <div className="crud">
            <CRUDForm />
            <DataTable />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
