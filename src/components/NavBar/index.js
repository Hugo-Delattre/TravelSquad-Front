import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button, Divider, Image, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../_services/account.service";

import "./style.scss";
// import TravelSquad from "../../img/TravelSquad.svg";

const NavBar = () => {
  const [ProfileInfo, setProfileInfo] = useState({});

  let navigate = useNavigate();
  const logout = () => {
    accountService.logout();
    navigate("/countries");
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
      <nav className="header--nav">
        <div className="logo">
          <h1 className="nav__title">
            <NavLink to="/" className="darkpurple">
              TravelSquad
            </NavLink>
          </h1>
        </div>
        <div className="nav--list">
          <ul className="lists">
            {/* <li className="list">
                  <NavLink to="/countries">Découvrir les pays</NavLink>
                </li> */}
            <li className="list">
              <NavLink to="/countries" className="blue">
                Découvrir les destinations
              </NavLink>
            </li>
            <NavLink to="/create-group">
              <li className="list blue">Créer une escouade</li>
            </NavLink>
          </ul>
        </div>
        <div className="log--btn">
          {accountService.isLogged() ? (
            <div className="log--flex">
              <NavLink to="/profile">
                {/* <img src={ProfileInfo.image} height="50px" alt="" /> */}
                {/* <Image src={ProfileInfo.image} height="50px" alt="Profile" /> */}
                <Icon
                  name="user circle"
                  alt="Profile"
                  size="huge"
                  className="darkpurple"
                />
              </NavLink>
              {/* <Button primary onClick={logout}>
                déconnexion
              </Button> */}
              <div>
                <Icon
                  name="sign-out"
                  size="large"
                  onClick={logout}
                  className="pointer darkpurple"
                />
              </div>
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

      <nav className="header--navMobile">
        <div className="phone--leftPart">
          <NavLink to="/countries">
            <Icon name="search" size="large" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/create-group">
            <Icon name="add" size="large" />
          </NavLink>
        </div>
        <div className="logo">
          <h1 className="nav__title">
            {/* <NavLink to="/">TravelSquad</NavLink> */}
          </h1>
        </div>
        {accountService.isLogged() ? (
          <>
            <div>
              <NavLink to="/profile">
                <Icon name="user circle" size="large" />
              </NavLink>
            </div>
            <div>
              <Icon
                color="blue"
                name="sign-out"
                size="large"
                onClick={logout}
                className="pointer"
              />
            </div>
          </>
        ) : (
          <div>
            <NavLink to="/login">
              <Icon name="user circle" size="large" />
            </NavLink>
          </div>
        )}

        {/* <div>
          <NavLink to="/profile">
            <Icon name="sign-out" size="large" />
          </NavLink>
        </div> */}
      </nav>

      <Divider />
    </header>
  );
};

export default NavBar;
