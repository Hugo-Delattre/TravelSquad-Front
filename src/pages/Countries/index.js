import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { NavLink } from "react-router-dom";
import CountryCard from "../../components/Card";
import axios from "axios";

import "./style.scss";

const Countries = () => {
  
  // useEffect(() => {
  //    axios
  //      .get("https://travelsquad.up.railway.app/countries")
  //      .then((response) => {
  //        setData(response.data);
  //        console.log(response.data);
  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }, []);
  
  
  return (
    <div>
      <NavBar />
      <section id="countries--section1">
        <div className="title--countries">
          <h1>Quelle sera votre prochaine destination ?</h1>
          <p>
            Découvrez de nouveaux horizons, rencontrez de nouvelles cultures.
          </p>
        </div>

        <div className="grid">
          <NavLink to="/countries/groups">
            <CountryCard />
          </NavLink>

          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
          <CountryCard />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Countries;
