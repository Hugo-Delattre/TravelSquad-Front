import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import GroupCard from "../../components/GroupCard";

import "./style.scss";



const Groups = () => {
  
  const [data, setData] = useState([]);
  
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
    { key: "al", value: "al", text: "(sans préférence)" },
    { key: "af", value: "af", text: "Farniente" },
    { key: "ax", value: "ax", text: "Test2" },
    { key: "al", value: "al", text: "Test3" },
  ];
  const languageOptions = [
    { key: "al", value: "al", text: "(sans préférence)" },
    { key: "af", value: "af", text: "Français" },
    { key: "ax", value: "ax", text: "Anglais" },
    { key: "al", value: "al", text: "Espagnol" },
  ];

  
   useEffect(() => {
     axios
       .get("https://jsonplaceholder.typicode.com/posts")
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
      <NavBar />
      <section id="groups--section1">
        <div className="groups--title">
          <h1>Liste des escouades - France</h1>
        </div>
      </section>
      <p>
        Vous pouvez filtrer pour trouver les groupes qui vous correspondent le mieux.
      </p>
      <section id="groups--section2-filter">
        <Select placeholder="Période du voyage" options={dateOptions} />
        <Select placeholder="Langue du groupe" options={languageOptions} />
        <Select placeholder="Ville" options={cityOptions} />
        <Select placeholder="Thème" options={themeOptions} />
        <Button primary>Valider</Button>
      </section>

      <section id="groups--section3-groups" className="GroupCard">
      
        {data.map(item => 
        <Link to="/countries/group">
        <GroupCard  key={item.id} item={item}/>
        </Link>
        )
        }
       
      </section>
      <Footer />
    </div>
  );
};

export default Groups;
