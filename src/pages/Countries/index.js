import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loader } from "semantic-ui-react";

import CountryCard from "../../components/CountryCard";

import "./style.scss";

import axiosInstance from "../../api/axiosInstance";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [groupMembersCount, setGroupMembersCount] = useState(0);

  useEffect(() => {
    axiosInstance
      .get("/countries")
      .then((response) => {
        setCountriesData(response.data.countries);
        console.log("countriesData", response.data.countries);
        setGroupMembersCount(response.data.numberOfGroups);
        // console.log("countriesData", response.data);
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
        {countriesData[6] ? (
          <div className="grid">
            {countriesData.map((country) => (
              <Link to={`/countries/${country.name}`}>
                <CountryCard
                  key={country.id}
                  countryData={country}
                  groupMembersCount={groupMembersCount}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="countries--loader">
            <Loader active inline="centered" />
          </div>
        )}
      </section>
    </div>
  );
};

export default Countries;
