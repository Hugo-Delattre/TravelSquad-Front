import React, { useState, useEffect } from "react";
import { Form, Loader, Message } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";

import axiosInstance from "../../api/axiosInstance";
import {
  countryOptions,
  themeOptions,
  languageOptions,
} from "../../data/options";
import "./style.scss";

const CreateGroup = () => {
  const [isGroupCreated, setIsGroupCreated] = useState(false);

  //contact cf phone/mail : je l'ai mis en commentaire, à voir à voir si on met l'email de l'utilisateur depuis le front ou si on ajoute le champ

  //Récupération du jeton d'authentification.
  const jwt = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, []);

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
    axiosInstance
      .post(
        "/countries/groups",
        {
          name: name,
          start: start,
          end: end,
          language: language,
          content: content,
          max_members: maxMembers,
          country: country,
          city: city,
          theme_id: themeID,
        },
        headers
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setIsGroupCreated(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [language, setLanguage] = useState("");
  const [content, setContent] = useState("");
  const [maxMembers, setMaxMembers] = useState();
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState("");
  const [themeID, setThemeID] = useState();
  const [contact, setContact] = useState("");
  // CONTACT : OK mais ce n'est pas renseigné en back-end, à voir si on met simplement l'email de l'utilisateur depuis le front ou si on ajoute le champ

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log("name", name);
  };

  const handleStartChange = (event, { value }) => {
    setStart(value);
    console.log("start", start);
  };

  const handleEndChange = (event, { value }) => {
    setEnd(value);
    console.log("end", end);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("language", language);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    console.log("content", content);
  };

  const handlemaxMembersChange = (event) => {
    setMaxMembers(event.target.value);
    console.log("maxMembers", maxMembers);
  };

  const handleCountryChange = (event, { value }) => {
    setCountry(value);
    console.log("country", country);
  };

  const handleCityChange = (event, { value }) => {
    setCity(value);
    console.log("city", city);
  };

  const handleThemeIDChange = (event, { value }) => {
    setThemeID(value);
    console.log("themeID", themeID);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
    console.log("contact", contact);
  };

  // Variable de la date minimale pour l'input date de départ
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];

  return (
    <>
      {jwt ? (
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
                    minLength={2}
                    maxLength={64}
                    // min="2"
                    // max="64"
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
                    // min="3"
                    // max="64"
                    minLength={3}
                    maxLength={64}
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
                    <Form.TextArea
                      className="end"
                      label="Décrivez votre voyage"
                      placeholder="Décrivez votre voyage, envies, idées d'activités, le profil des gens avec qui vous aimeriez voyager, etc"
                      id="story"
                      name="story"
                      rows="5"
                      cols="33"
                      // min="2"
                      // max="1000"
                      value={content}
                      onChange={handleContentChange}
                      required
                    />
                  </div>
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

              <div>
                {isGroupCreated ? (
                  <Form success className="groupCreated">
                    <Link to={`/countries/${country}`}>
                      <Message
                        success
                        header="Escouade créée avec succès !"
                        content="Elle est désormais accessible dans la liste des escouades, cliquez ici pour y accéder."
                      />
                    </Link>
                  </Form>
                ) : (
                  <button
                    type="submit"
                    color="blue"
                    className="btn--createGroup"
                  >
                    CRÉER LE GROUPE
                  </button>
                )}
              </div>

              {/* <Button type="submit" color="blue" className="btn--createGroup">
              CRÉER LE GROUPE
            </Button> */}
              {/* Remplacer Button par button pour récup l'autre style de bouton */}
            </Form>
          </section>
        </div>
      ) : (
        <div className="countries--loader">
          <Loader active inline="centered" />
        </div>
      )}
    </>
  );
};

export default CreateGroup;
