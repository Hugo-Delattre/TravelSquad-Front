import React from "react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Form, Select, TextArea } from "semantic-ui-react";
const Signup = () => {
  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];
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
            <i class="window minimize icon" size="big"></i>
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
          <div className="field--left">
            <Form.Input label="Prenom" placeholder="Prenom" required />
            <Form.Input
              type="email"
              label="Adresse Electronique"
              placeholder="Email"
              required
            />
            <Form.Input
              type="password"
              label="Comfirmation du mot de passe"
              placeholder="Confirmer le mot de passe"
              required
            />
            <Form.Input type="number" label="Age" placeholder="Age" required />
          </div>
          <div className="field--right">
            <Form.Input label="Nom" placeholder="Nom" required />
            <Form.Input
              type="password"
              label="Mot de passe"
              placeholder="mot de passe"
              required
            />
            <Form.Field
              control={Select}
              options={countryOptions}
              label="Pays"
              placeholder="Pays"
              required
            />
            <Form.Input
              type="tel"
              label="Numeros de telephone"
              placeholder="(+33)"
              required
            />
          </div>
        </div>
        <div className="field--bottom">
        <label >Votre message:</label>
          <TextArea  placeholder='Tell us more'   style={{ minWidth: 386 }} />
        <NavLink to="/login">
            <p className="deja--membre">Deja membre?</p>
            </NavLink>
        </div>
        <button className="btn--right">Click Here</button>
      </div>
    </div>
  );
};

export default Signup;
