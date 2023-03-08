import React, { useState, useEffect } from "react";

import "./style.scss";

import { Form, Input, Select, Button, TextArea, Loader} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateGroup = ({ isLoggedIn }) => {
  const ageOptions = [
    { key: "ax", value: "ax", text: "18-25" },
    { key: "ax", value: "ax", text: "25-40" },
    { key: "al", value: "al", text: "40-60" },
    { key: "al", value: "al", text: "60-80" },
    { key: "al", value: "al", text: "(Aucune préférence)" },
  ];
  // const cityOptions = [
  //   { key: "pa", value: "paris", text: "Paris" },
  //   { key: "to", value: "tokyo", text: "Tokyo" },
  //   { key: "sh", value: "shangai", text: "Shangai" },
  //   { key: "ne", value: "newyork", text: "New York" },
  // ];
  const countryOptions = [
    { key: "fr", value: "france", text: "France" },
    { key: "ja", value: "japon", text: "Japon" },
    { key: "th", value: "thaïlande", text: "Thaïlande" },
    { key: "it", value: "italie", text: "Italie" },
    { key: "tu", value: "turquie", text: "Turquie" },
    { key: "ma", value: "maroc", text: "Maroc" },
    { key: "us", value: "états-unis", text: "États-Unis" },
    { key: "es", value: "espagne", text: "Espagne" },
    { key: "me", value: "mexique", text: "Mexique" },
    { key: "ch", value: "chine", text: "Chine" },
  ];
  const themeOptions = [
    { key: "cu", value: "2", text: "Culturel" },
    { key: "fe", value: "3", text: "Festif" },
    { key: "sp", value: "4", text: "Sportif" },
    { key: "fa", value: "1", text: "Farniente" },
  ];
  const languageOptions = [
    { key: "fr", value: "af", text: "FR" },
    { key: "en", value: "ax", text: "EN" },
    { key: "es", value: "al", text: "Langue X" },
    { key: "ax", value: "ax", text: "Langue X" },
    { key: "al", value: "al", text: "Langue X" },
    { key: "al", value: "al", text: "(sans préférence)" },
  ];
  // const genderOptions = [
  //   { key: "al", value: "al", text: "Mixte" },
  //   { key: "af", value: "af", text: "♂" },
  //   { key: "ax", value: "ax", text: "♀️" },
  // ];

  //contact cf phone/mail : je l'ai mis en commentaire, à voir à voir si on met l'email de l'utilisateur depuis le front ou si on ajoute le champ

  
  
  //Récupérer le jeton d'authentification
  const jwt = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const navigate = useNavigate();
    useEffect(() => {if (!jwt) {
    navigate("/login");
  } }, []);
  
  
  
  
  const handleSubmit = (event) => {
    console.log(
      "submit",
      name,
      start,
      end,
      language,
      content,
      maxMembers,
      country,
      city,
      themeID,
      contact
    );
    event.preventDefault();
    axios
      .post("https://travelsquadb.up.railway.app/countries/groups", {
        name: name,
        start: start,
        end: end,
        language: language,
        content: content,
        max_members: maxMembers,
        country: country,
        city: city,
        theme_id: themeID,
      }, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // NAME
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log("name", name);
  };

  // DEPARTURE & ARRIVAL DATES 
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleStartChange = (event, { value }) => {
    setStart(value);
    console.log("start", start);
  };

  const handleEndChange = (event, { value }) => {
    setEnd(value);
    console.log("end", end);
  };

  // LANGUAGE : OK
  const [language, setLanguage] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("language", language);
  };

  // CONTENT 
  const [content, setContent] = useState("");
  const handleContentChange = (event) => {
    setContent(event.target.value);
    console.log("content", content);
  };

  // MAX_MEMBERS 
  const [maxMembers, setMaxMembers] = useState();
  const handlemaxMembersChange = (event) => {
    setMaxMembers(event.target.value);
    console.log("maxMembers", maxMembers);
  };

  // COUNTRY 
  const [country, setCountry] = useState([]);
  const handleCountryChange = (event, { value }) => {
    setCountry(value);
    console.log("country", country);
  };

  // CITY
  const [city, setCity] = useState("");

  const handleCityChange = (event, { value }) => {
    setCity(value);
    console.log("city", city);
  };

  //THEME_ID 
  const [themeID, setThemeID] = useState();
  const handleThemeIDChange = (event, { value }) => {
    setThemeID(value);
    console.log("themeID", themeID);
  };

  // CONTACT
  const [contact, setContact] = useState("");

  const handleContactChange = (event) => {
    setContact(event.target.value);
    console.log("contact", contact);
  };

  // Variable de la date minimale pour l'input date de départ
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];

  return (
    <>{jwt ? (
      <div className="createGroup--pageContainer">
        <div>
          <h1>Envie de former votre propre équipe ?</h1>
          <p>
            Renseignez les champs de façon à être contacté(e) par les
            utilisateurs qui correspondent le mieux à vos critères.
          </p>
        </div>

        <section id="CreateGroup--section1">
          {/* <h2>Informations principales concernant le voyage :</h2> */}
          <Form onSubmit={handleSubmit} className="CreateGroup--Title">
            <Form.Group widths="equal">
              <Form.Field required>
                <Form.Input
                  label="Intitulé du voyage"
                  placeholder="Ex: Séjour à Tokyo, Escape Game à Paris, Springbreak à Cancún, ..."
                  value={name}
                  onChange={handleNameChange}
                  minLength={2}
                  maxLength={64}
                  required
                />
                {/* <Form.Input
                  fluid
                  id="form-subcomponent-shorthand-input-E-mail"
                  placeholder="Email de contact (champ à retirer ici OU à ajouter en DB)"
                  value={contact}
                  onChange={handleContactChange}
                /> */}
                <Form.Input
                  label="Nombre de places maximal dans le groupe"
                  type="number"
                  min="2"
                  max="10"
                  fluid
                  id="form-subcomponent-shorthand-input-last-name"
                  placeholder="Ex: 2, 3, 5, ..."
                  value={maxMembers}
                  onChange={handlemaxMembersChange}
                  required
                />

                {/* <Select placeholder="Pays" options={CreateGroupePaysOptions} /> */}
                <Form.Select
                  // fluid
                  label="Pays de destination"
                  placeholder="France, Japon, Mexique, ..."
                  options={countryOptions}
                  value={country}
                  onChange={handleCountryChange}
                  required
                />
                <Form.Input
                  fluid
                  label="Ville de destination"
                  // options={CreateGroupeCityOptions}
                  placeholder="Paris, Tokyo, Cancún, ..."
                  value={city}
                  onChange={handleCityChange}
                  min="2"
                  max="64"
                  required
                />
                <Form.Select
                  label="Thème du voyage"
                  placeholder="Culturel, sportif, ..."
                  options={themeOptions}
                  value={themeID}
                  onChange={handleThemeIDChange}
                  required
                />
                <Form.Input
                  label="Langue(s) principale(s) du groupe"
                  placeholder="Français, Anglais, ..."
                  options={languageOptions}
                  value={language}
                  onChange={handleLanguageChange}
                  min="3"
                  max="64"
                  required
                />
                <div>
                  <Form.Input
                    type="date"
                    label="Date de début"
                    id="date-departure-input"
                    name="date"
                    value={start}
                    onChange={handleStartChange}
                    min={tomorrowString} // minimal date is today date. toISOString() to convert date to ISO format then split() to extract the date without the hour.
                    required
                  />
                  <Form.Input
                    type="date"
                    label="Date de fin"
                    id="date-arrival-input"
                    name="date"
                    value={end}
                    onChange={handleEndChange}
                    min={tomorrowString}
                    required
                  />
                </div>
                <Form.TextArea
                  className="end"
                  label="Décrivez votre voyage"
                  placeholder="Décrivez votre voyage, envies, idées d'activités, le profil des gens avec qui vous aimeriez voyager, etc"
                  id="story"
                  name="story"
                  rows="5"
                  cols="33"
                  minLength={10}
                  value={content}
                  onChange={handleContentChange}
                  required
                ></Form.TextArea>
              </Form.Field>
            </Form.Group>
            {/* <textarea
              label="Décrivez votre voyage, idées d'activité, ambiance, etc"
              placeholder="Décrivez votre voyage, idées d'activité, ambiance, etc :"
              id="story"
              name="story"
              rows="5"
              cols="33"
              value={content}
              onChange={handleContentChange}
            ></textarea> */}

            {/* <h2>
              Vos critères concernant vos partenaires de voyage : <br />
              (Fonctionnalité à passer en V2 ? Je mets les select en commentaire
              le temps de faire des premiers .post)
            </h2> */}
            {/* <Select
              placeholder="Tranche d'âge"
              options={CreateGroupeAgeOptions}
            /> */}

            {/* <Select
              placeholder="Genre des membres du groupe"
              options={GenderOptions}
            /> */}

            {/* <div id="CreateGroup--section2"> */}
            {/* <h2>Sélectionnez votre date prévue de départ et d'arrivée :</h2> */}
            {/* </div> */}
            <button type="submit" color="blue" className="btn--createGroup">
              CRÉER LE GROUPE
            </button>
            {/* <Button type="submit" color="blue" className="btn--createGroup">
              CRÉER LE GROUPE
            </Button> */}
            {/* Remplacer Button par button pour récup l'autre style de bouton */}
          </Form>
        </section>
      </div>) : <div className="countries--loader">
          <Loader active inline="centered" />
        </div> }
    </>
  );
};

export default CreateGroup;
