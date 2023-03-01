import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard";

import GroupCard from "../../components/GroupCard";

import "./style.scss";

import axios from "axios";
// import axiosInstance from "../../api/axiosInstance";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/"
})

const Countries = () => {
  
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
      <NavBar />
      <section id="countries--section1">
        <div className="title--countries">
          <h1>Quelle sera votre prochaine destination ?</h1>
          <p>
            Découvrez de nouveaux horizons, rencontrez de nouvelles cultures.
          </p>
        </div>

        <div className="grid">
       
           
        {countriesData.map(country => 
        <Link to="/countries/groups">
        <CountryCard 
        // key={}
        countryData={country} />
        </Link>
        )
        }
           
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Countries;
