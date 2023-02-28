import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.scss";
import { Button } from "semantic-ui-react";
import CountryCard from "../../../components/CountryCard";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://travelsquad.up.railway.app/"
})


const Section3 = () => {
  
  const [countriesData, setCountriesData] = useState([]);
  
  useEffect(() => {
  
      axiosInstance
       .get("/countries")
       .then((response) => {
         setCountriesData(response.data);
        //  console.log("countriesData", countriesData);
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
            
            {countriesData.map(country => 
             <Link to="/countries/groups">
             <CountryCard 
             // key={}
             countryData={country} />
             </Link>
        )
        }
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
