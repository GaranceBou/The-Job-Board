import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";
import Job from "./components/job";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <Header title={"The Job Board"} />
      </header>
      <div className="Jobs">
        <div className="red">
          <Job
            title={"Full Times Sales Associate - Sydney Boutique"}
            contractType={"CDI"}
            country={"Australie"}
            city={"Sydney"}
          />
        </div>
        <div className="green">
          <Job
            title={"Agent de sécurité - Pantin"}
            contractType={"CDI"}
            country={"France"}
            city={"Pantin"}
          />
        </div>
        <div className="yellow">
          <Job
            title={"Responsable d'atelier"}
            contractType={"CDD"}
            country={"France"}
            city={"Lyon"}
          />
        </div>
        <div className="blue">
          <Job
            title={"Chef de projets"}
            contractType={"CDD"}
            country={"France"}
            city={"Bordeaux"}
          />
        </div>
        <div className="pink">
          {" "}
          <Job
            title={"Développeur React.js"}
            contractType={"CDI"}
            country={"France"}
            city={"Toulouse"}
          />
        </div>
        <div className="red">
          <Job
            title={"Sales Associate Stockholm"}
            contractType={"CDI"}
            country={"Suède"}
            city={"Stockholm"}
          />
        </div>
        <div className="green">
          {" "}
          <Job
            title={"Vendeur/se - Crans Montana"}
            contractType={"CDI"}
            country={"Suisse"}
            city={"Cans-Montana"}
          />
        </div>
        <div className="yellow">
          <Job
            title={"CRM & Data Quality Analyst"}
            contractType={"CDI"}
            country={"USA"}
            city={"New York"}
          />
        </div>
        <div className="blue">
          <Job
            title={"Infirmier (H/F)"}
            contractType={"CDI"}
            country={"France"}
            city={"Grenoble"}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
