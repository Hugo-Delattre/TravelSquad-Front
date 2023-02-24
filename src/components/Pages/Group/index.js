import React from "react";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

import { Icon, Checkbox } from "semantic-ui-react";
import "./style.scss";
const Group = () => {
  return (
    <div>
      <NavBar />
      <section id="section--container">
        {/* <div className="main--title">
          <h1>Titre du groupe</h1>
          <p>langues parlées</p>
        </div> */}

        <div id="border--main">
          <h1>Titre du groupe</h1>
          <p>langues parlées</p>
          <div id="details--container">
            <div className="details-part-left">
              <p>Destination du groupe</p>
              <p>
                <Icon name="user" size="big"></Icon> Créateur du groupe
              </p>
              <div className="date--depart">
                <p>Date de départ--Date de fin</p>
              </div>
            </div>

            <div className="details-part-right">
              <p>Ville de destination</p>
              <p>Nombre max de personnes</p>
              <p>Tranche d'âge des membres voulu</p>
            </div>
          </div>
          <div id="desc--container">
            <div className="desc--voyage">
              <h2>Description du voyage :</h2>
              <textarea rows="5" cols="82"></textarea>
            </div>
          </div>
          <div className="membres--container">
            <div className="membres--title">
              <h3>Les membres du groupe :</h3>
            </div>

            <div className="membres--left">
              <div className="membre">
                <Icon name="user circle" size="big"></Icon>
                <p className="membre--name">Nom de la personne</p>{" "}
                <Checkbox toggle />{" "}
              </div>
              <div className="membre">
                <Icon name="user circle" size="big"></Icon>
                <p className="membre--name">Nom de la personne</p>{" "}
                <Checkbox toggle />
              </div>
            </div>
            <div className="membres--right">
              <div className="membre">
                <Icon name="user circle" size="big"></Icon>
                <p className="membre--name">Nom de la personne</p>{" "}
                <Checkbox toggle />
              </div>
              <div className="membre">
                <Icon name="user circle" size="big"></Icon>
                <p className="membre--name">Nom de la personne</p>{" "}
                <Checkbox toggle />
              </div>
            </div>
          </div>
        </div>
        <button className="btn--register">
          <h3>JE M'INSCRIS A CE GROUPE</h3>
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Group;
