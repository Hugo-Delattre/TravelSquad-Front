import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, Button } from "semantic-ui-react";
import { Link, useLocation, useParams } from "react-router-dom";

import GroupCard from "../../components/GroupCard";




import "./style.scss";

const Groups = (props) => {
  
  const location = useLocation();
  const params = useParams();
  console.log(params);
  console.log("useLocation", location)
  

  const [data, setData] = useState([]);
  
  const capitalizeFirstLetter = (countryName) => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };

  // const countryOptions = [
  //   { key: 'af', value: 'af', text: 'Japon' },
  //   { key: 'ax', value: 'ax', text: 'France' },
  //   { key: 'al', value: 'al', text: 'Mexique' },
  // ]
  const dateOptions = [
    { key: "al", value: "al", text: "(sans préférence)" },
    { key: "af", value: "af", text: "Printemps" },
    { key: "ax", value: "ax", text: "Été" },
    { key: "al", value: "al", text: "Automne" },
    { key: "al", value: "al", text: "Hiver" },
  ];
  const cityOptions = [
    { key: "al", value: "al", text: "(sans préférence)" },
    { key: "af", value: "af", text: "Tokyo" },
    { key: "ax", value: "ax", text: "Kyoto" },
  ];
  // const ageOptions = [
  //   { key: "af", value: "af", text: "18-25" },
  //   { key: "ax", value: "ax", text: "25-39" },
  //   { key: "al", value: "al", text: "40+" },
  //   { key: "al", value: "al", text: "(sans préférence)" },
  // ];
  const themeOptions = [
    { key: "cu", value: "2", text: "Culturel" },
    { key: "fe", value: "3", text: "Festif" },
    { key: "sp", value: "4", text: "Sportif" },
    { key: "fa", value: "1", text: "Farniente" },
  ];
  const languageOptions = [
    { key: "al", value: "al", text: "(sans préférence)" },
    { key: "af", value: "af", text: "Français" },
    { key: "ax", value: "ax", text: "Anglais" },
    { key: "al", value: "al", text: "Espagnol" },
  ];


  useEffect(() => {
    axios
      .get(`https://travelsquadb.up.railway.app/countries/${params.countryName}`)
      .then((response) => {
        setData(response.data);
         console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  
  return (
    <div>
      <section id="groups--section1">
        <div className="groups--title">
          <h1>Liste des escouades - {capitalizeFirstLetter(params.countryName)}</h1>
        </div>
      </section>
      <p>
        Vous pouvez filtrer pour trouver les groupes qui vous correspondent le
        mieux.
      </p>
      <section id="groups--section2-filter">
        {/* <Select placeholder="Période du voyage" options={dateOptions} /> */}
        {/* <Select placeholder="Langue du groupe" options={languageOptions} /> */}
        {/* <Select placeholder="Ville" options={cityOptions} /> */}
        <Select placeholder="Thème" options={themeOptions} />
        <Button primary>Valider</Button>
      </section>

      <section id="groups--section3-groups" className="GroupCard">
        {data.map((groupData) => (
          <Link to="/countries/group">
            <GroupCard
              // key={groupData.id}
              groupData={groupData}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Groups;
