import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CountryCard from "../../components/CountryCard";
import GroupCard from "../../components/GroupCard";

import "./style.scss";


const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});


const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/countries")
      .then((response) => {
        setCountriesData(response.data);
         console.log("countriesData", countriesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <section id="countries--section1">
        <div className="title--countries">
          <h1>Quelle sera votre prochaine destination ?</h1>
          <p>
            Découvrez de nouveaux horizons, rencontrez de nouvelles cultures.
          </p>
        </div>

        <div className="grid">
          {countriesData.map((country) => (
            // <Link to="/countries/groups">
            <Link to={`/countries/${country.name}`}>
              <CountryCard
                // key={country.id}
                countryData={country}
         
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Countries;
