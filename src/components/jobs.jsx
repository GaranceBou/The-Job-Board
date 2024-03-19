import Job from "./job";

const Jobs = (props) => {
  return (
    <main className="Jobs">
      <Job
        className="red"
        title="Full Times Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="green"
        title="Agent de sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="yellow"
        title="Responsable d'atelier"
        contractType="CDD"
        country="France"
        city="Lyon"
      />
      <Job
        className="blue"
        title="Chef de projets"
        contractType="CDD"
        country="France"
        city="Bordeaux"
      />
      <Job
        className="pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Toulouse"
      />
      <Job
        className="red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Cans-Montana"
      />
      <Job
        className="yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Grenoble"
      />
    </main>
  );
};

export default Jobs;
