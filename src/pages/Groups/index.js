import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select, Button, Loader } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

import GroupCard from "../../components/GroupCard";

import "./style.scss";

import {
  capitalizeFirstLetter,
  formatDate,
} from "../../utils/textFormat";

import axiosInstance from "../../api/axiosInstance";

const Groups = (props) => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState([]);

  // const capitalizeFirstLetter = (countryName) => {
  //   return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  // };

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
    axiosInstance
      .get(`/countries/${params.countryName}`)
      .then((response) => {
        setData(response.data);
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Get image URL of the country
  const [imgURL, setImgURL] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/countries")
      .then((response) => {
        console.log(response);
        const countryInfo = response.data.countries.filter((element) => {
          return element.name === params.countryName;
        });
        setImgURL(countryInfo[0].img_url);
        // console.log("countryInfo", countryInfo[0].img_url);
        // console.log("imgURL", imgURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section id="groups--section1">
        <div className="groups--title">
          <h1>
            Liste des escouades - {capitalizeFirstLetter(params.countryName)}
          </h1>
        </div>
      </section>
      <>
        {data[0] ? (
          <>
            <p>
              Vous pouvez filtrer pour trouver les groupes qui vous
              correspondent le mieux.
            </p>
            <section id="groups--section2-filter">
              {/* <Select placeholder="Période du voyage" options={dateOptions} /> */}
              {/* <Select placeholder="Langue du groupe" options={languageOptions} /> */}
              {/* <Select placeholder="Ville" options={cityOptions} /> */}
              <Select placeholder="Thème" options={themeOptions} />
              <Button primary > Valider </Button>
            </section>
            <section id="groups--section3-groups" className="GroupCard">
              {data.map((groupData) => (
                <Link to={`/countries/group/${groupData.id}`}>
                  {console.log(groupData.id)}
                  <GroupCard
                    key={groupData.id}
                    groupData={groupData}
                    imgURL={imgURL}
                  />
                </Link>
              ))}
            </section>
          </>
        ) : (
          <>
            <div className="groups--loader">
              <Loader active inline="centered" />
            </div>
            {/* <h1>
              Il n'y a pas d'escouade disponible vers cette destination pour le
              moment.
            </h1>
            <p>L'occasion parfaite d'en créer une !</p>
            <Link to="/create-group">
              <Button primary>Créer ma propre escouade</Button>
            </Link> */}
          </>
        )}
      </>
    </>
  );
};

export default Groups;
