import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider } from "semantic-ui-react";

import "./style.scss";

const NavBar = () => {
  return (
    <header>
      <nav id="header--nav">
        <div className="logo">
          <h1 className="nav__title"><NavLink to="/"> TravelSquad</NavLink></h1>
        </div>
        <div className="nav--list">
          <ul className="list">
            <li >
              <NavLink  to="/countries">
                Découvrir les pays
              </NavLink>
            </li>
            <NavLink to="/create-group">        
            <li >
              Créer un groupe
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="log--btn">
          <Button primary>Sign up</Button>
          <Button>Log-in</Button>
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
