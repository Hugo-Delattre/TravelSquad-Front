import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { Button } from "semantic-ui-react";
import CardExampleCard from "../../../Card";

const Section3 = () => {
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
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
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
