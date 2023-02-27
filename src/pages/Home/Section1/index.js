import React from "react";
import "./style.scss";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section id="home--section1">
      <div className="section1--flex_left">
        <h1>Ne voyagez plus jamais seul</h1>
        <p>
          TravelSquad vous permet de rencontrer vos futurs partenaires de
          voyages.
        </p>
        <Link to="/countries">
          <Button color="blue">
            Découvrir les destinations
          </Button>
        </Link>
      </div>
      <div className="section1--flex_right">
        <img
          src="https://cdn.discordapp.com/attachments/1041393617643778073/1077636760680529960/group-of-friends-having-fun-while-travelling.jpeg"
          alt="Groupe d'amis profitant de leur voyage"
        />
      </div>
    </section>
  );
};

export default Section1;
