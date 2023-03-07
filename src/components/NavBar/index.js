import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../_services/account.service";
// import TravelSquad from "../../img/TravelSquad.svg";

import "./style.scss";

const NavBar = () => {
let navigate=useNavigate()
  const logout=()=>{
    accountService.logout()
    navigate('/')
  }
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

          {accountService.isLogged() ?
          <div>
           <Icon name="user circle " className="profile" size="huge" />
          
              <Button primary onClick={logout}>déconnexion</Button>
           </div>:
            <div>
            <NavLink to="/login">
            <Button>Se connecter</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button primary>S'inscrire</Button>
          </NavLink> </div>}

          
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
