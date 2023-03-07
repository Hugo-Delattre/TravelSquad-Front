import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import "./style.scss";
import React, { useState } from "react";
import axios from "axios";

import { Form, TextArea,Select } from "semantic-ui-react";
const Signup = () => {
  const countryOptions = [
    { key: "fr", value: "france", text: "France" },
    { key: "es", value: "espagne", text: "Espagne" },
    { key: "us", value: "états-unis", text: "États-Unis" },
    { key: "ja", value: "japon", text: "Japon" },
    { key: "me", value: "mexique", text: "Mexique" },
    { key: "th", value: "thaïlande", text: "Thaïlande" },
    { key: "ma", value: "maroc", text: "Maroc" },
    { key: "tu", value: "turquie", text: "Turquie" },
    { key: "ch", value: "chine", text: "Chine" },
  ];
  const Gender = [
    { key: 'h', text: 'homme', value: 'homme' },
    { key: 'f', text: 'femme', value: 'femme' },
    { key: 'a', text: 'autre', value: 'autre' },
  ]
  const axiosInstance = axios.create({
    baseURL: "https://travelsquadb.up.railway.app/",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
   axiosInstance.post('/profile',data)
      .then((res) => {
   
        console.log(res.token);
      })
      .catch((err) => {
        console.log(err);
      },[data]);
    console.log(data);
  };
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    age: "",
    country_of_origin:'',
    sex:'',
    spoken_language:'',
    content: "",
  });
   const handleChangeCountry = (e, { value }) => {
    setData({ ...data, country_of_origin: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };
  const handleLanguageChange = (e, { value }) => {
    setData({ ...data, spoken_language: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };
  const handleSexChange = (e, { value }) => {
    setData({ ...data, sex: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };
  return (
    <div className="signup--container">
      <div className="signup--left">
        <div className="left--content">
          <div className="logo--left">
            <NavLink to="/">
              <h1>TravelSquad</h1>
            </NavLink>
          </div>
          <div className="welcome--content">
            <p>au plaisir de vous voir</p>
            <h1>BIENVENUE</h1>
            <i className="window minimize icon" size="big"></i>
            <p>
              Partez à la découverte des plus belles destinations <br />
              du monde et créez des souvenirs inoubliables
            </p>
          </div>
        </div>
      </div>
      <div className="signup--right">
        <div className="title--right">
          <h1>Inscription</h1>
        </div>
        <div className="fields--container">
          <div className="fields" onSubmit={handleSubmit}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Input
                name="firstName"
                value={data.firstName}
                label="Prenom"
                placeholder="Prenom"
                required
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />

              <Form.Input
                value={data.lastName}
                label="Nom"
                placeholder="Nom"
                required
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
              <Form.Input
                name="email"
                value={data.email}
                type="email"
                label="Adresse Electronique"
                placeholder="Email"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <Form.Input
                name="tel"
                value={data.phone}
                type="tel"
                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                label="Numeros de telephone"
                placeholder="(+33)"
                required
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />

              <Form.Input
                name="password"
                value={data.password}
                type="password"
                label="Mot de passe"
                placeholder="mot de passe"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <Form.Input
                name="passwordConfirm"
                value={data.passwordConfirm}
                type="password"
                label="Comfirmation du mot de passe"
                placeholder="Confirmer le mot de passe"
                required
                onChange={(e) =>
                  setData({ ...data, passwordConfirm: e.target.value })
                }
              />
              <Form.Input
                value={data.age}
                type="number"
                label="Age"
                placeholder="Age"
                required
                onChange={(e) => setData({ ...data, age: e.target.value })}
              />
              <Form.Select
                options={countryOptions}
                label="langue parler"
                placeholder="langue parler"
                required
                value={data.spoken_language}
                onChange={handleLanguageChange}
               
              />

               
       <Form.Select label="Pays" required placeholder='Select your country' value={data.country_of_origin} options={countryOptions} onChange={handleChangeCountry} />
              <TextArea
                name="text"
                value={data.content}
                placeholder="Tell us more"
                style={{ minWidth: 386 }}
                onChange={(e) =>
                  setData({ ...data, content: e.target.value })
                }/>
                <Form.Field
            control={Select}
            label='sex'
            value={data.sex}
            options={Gender}
            placeholder='sex'
            onChange={handleSexChange}/>
          
   
              

<NavLink to="/login"><p className="deja--membre">Deja membre?</p></NavLink>
              <button type="submit" className="btn--right">
                Click Here
              </button>
              
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
