import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Icon } from "semantic-ui-react";

// import TravelSquad from "../../img/TravelSquad.svg";

import "./style.scss";

const NavBar = ({ isLoggedIn }) => {
  return (
    <header>
      <nav id="header--nav">
        <div className="logo">
          <h1 className="nav__title">
            <NavLink to="/">TravelSquad</NavLink>
          </h1>
        </div>
        <div className="nav--list">
          <ul className="lists">
            {/* <li className="list">
              <NavLink to="/countries">Découvrir les pays</NavLink>
            </li> */}
            <li className="list">
              <NavLink to="/countries">Découvrir les destinations</NavLink>
            </li>
            <NavLink to="/create-group">
              <li className="list">Créer une escouade</li>
            </NavLink>
          </ul>
        </div>
        <div className="log--btn">
          {isLoggedIn ? (
            // <Image
            //   src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            //   size="mini"
            //   circular
            // />
            <Icon name="user circle" className="tata" size="huge" />
          ) : (
            <div>
              <NavLink to="/login">
                <Button>Se connecter</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button primary>S'inscrire</Button>
              </NavLink>
            </div>
          )}

          <NavLink to="/login">
            <Button>Se connecter</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button primary>S'inscrire</Button>
          </NavLink>
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
