import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../_services/account.service";
import "./style.scss";
// import TravelSquad from "../../img/TravelSquad.svg";

const NavBar = () => {
  const [ProfileInfo, setProfileInfo] = useState("");
  let navigate = useNavigate();
  const logout = () => {
    accountService.logout();
    navigate("/");
  };
  useEffect(() => {
    accountService
      .profile(ProfileInfo)
      .then((res) => {
        setProfileInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          {accountService.isLogged() ? (
            <div>
              <NavLink to="/profile">
                {/* <img src={ProfileInfo.image} height="50px" alt="" /> */}
                <Image
                  className="nav--img"
                  src={ProfileInfo.image}
                  floated="left"
                  size="tiny"
                  circular
                />
              </NavLink>
              <Button primary onClick={logout}>
                déconnexion
              </Button>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <Button>Se connecter</Button>
              </NavLink>
              <NavLink to="/signup">
                <Button primary>S'inscrire</Button>
              </NavLink>{" "}
            </div>
          )}
        </div>
      </nav>
      <Divider />
    </header>
  );
};

export default NavBar;
