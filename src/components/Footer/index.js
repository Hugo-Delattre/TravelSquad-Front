import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { Divider } from "semantic-ui-react";

const Footer = ({ isLoggedIn }) => {
  return (
    <>
      <Divider />
      <footer className="footer--nav">
        <div className="footer--title__slogan">
          <NavLink to="/">
            <h1>TravelSquad</h1>
          </NavLink>
          <p>Voyagez ensemble, créez des liens pour toujours.</p>
        </div>

        <div className="footer--list">
          <NavLink className="animation--underline" to="/countries">
            Découvrir les Pays
          </NavLink>

          <NavLink className="animation--underline" to="/create-group">
            Créer un groupe
          </NavLink>

          <NavLink className="animation--underline" to="/profile">
            Mon Profil
          </NavLink>

          <NavLink className="animation--underline" to="/team">
            Equipe & Contact
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
