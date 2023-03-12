import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import { Button } from "semantic-ui-react";
import CountryCard from "../../../components/CountryCard";

import axiosInstance from "../../../api/axiosInstance";

const Section3 = () => {
  const [countriesData, setCountriesData] = useState([]);
   const [groupMembersCount, setGroupMembersCount] = useState(0);

  useEffect(() => {
    axiosInstance
      .get("/countries")
      .then((response) => {
        setCountriesData((response.data.countries).slice(0, 3));
        setGroupMembersCount(response.data.numberOfGroups);
        // setCountriesData(...countriesData, response.data.countries[1]);
         console.log("countriesData", countriesData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section id="home--section3">
        <div className="carrousel_container">
          <h1>Prêt(e) à rejoindre l'aventure ?</h1>
          <p>
            Choisissez votre pays de destination pour découvrir vos futurs
            partenaires de voyage.
          </p>
          <div className="carrousel">
            {countriesData.map((country) => (
              <Link to={`/countries/${country.name}`}>
                <CountryCard
                  key={country.id}
                  countryData={country}
                  groupMembersCount={groupMembersCount}
                />
              </Link>
            ))}
            {/* <CountryCard />
            <CountryCard />
            <CountryCard /> */}
          </div>
          <Button color="blue" className="customStyle">
            <NavLink to="/countries">Afficher toutes les destinations</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Section3;
