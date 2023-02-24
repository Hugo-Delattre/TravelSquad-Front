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
            <li>
              <NavLink  to="/countries/groups">
                  Rejoindre une escouade
                </NavLink>
            </li>
            <NavLink to="/create-group">        
            <li >
              Créer une escouade
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="log--btn">
          <NavLink to="/signup">
          <Button primary>Sign up</Button>
          </NavLink>
          <NavLink to="/login">
          <Button>Log-in</Button>
          </NavLink>
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
