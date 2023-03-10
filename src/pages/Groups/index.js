import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Select, Button, Loader } from "semantic-ui-react";

import axiosInstance from "../../api/axiosInstance";
import GroupCard from "../../components/GroupCard";
import "./style.scss";
import { capitalizeFirstLetter, formatDate } from "../../utils/textFormat";

import {
  ageOptions,
  themeOptions,
  languageOptions,
} from "../../data/options";

const Groups = (props) => {
  const params = useParams();
  console.log(params);

  const [data, setData] = useState([]);

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
              <Button primary> Valider </Button>

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
