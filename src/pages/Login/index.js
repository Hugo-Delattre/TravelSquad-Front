import { Form, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";
import { useNavigate } from "react-router-dom";


import { accountService } from "../../_services/account.service";
import { useEffect, useState } from "react";
import Profile from "../Profile";

const Login = () => {


  let navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();

    accountService.login(dataLogin)
      .then(res => {
        accountService.saveToken(res.data.token)  // Sauvegarde du token et envoi vers page d'accueil
        navigate('/', {replace: true} )
     console.log(res)
      })
      .catch(err => {
        console.log(err);
      });

  };

  const [dataLogin, setdataLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <div id="log--container">
      <div id="left--side">
        <div className="left--logo--side">
          <NavLink to="/">
            <h1>TravelSquad</h1>
          </NavLink>
        </div>
        <div className="content--welcome--left">
          <p>Au plaisir de vous revoir</p>
          <h1>BIENVENUE</h1>
          <i class="window minimize icon" size="big"></i>
          <p>
            Partez à la découverte des plus belles destinations <br />
            du monde et créez des souvenirs inoubliables
          </p>
        </div>
      </div>

      <div className="right--side">
        <div className="right--content">
          <h1>Connexion au compte </h1>

          <Icon name="user circle" className="tata" size="big" />
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Field>
              <input
                type="email"
                value={dataLogin.email}
                placeholder="Email"
                onChange={(e) =>
                  setdataLogin({ ...dataLogin, email: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                type="password"
                value={dataLogin.password}
                onChange={(e) =>
                  setdataLogin({ ...dataLogin, password: e.target.value })
                }
                placeholder="Mot de passe"
                required
              />
            </Form.Field>

            <NavLink to="/signup">
              <p className="redirect--login">Pas encore membre ?</p>
            </NavLink>

            <button className="log--submit" type="submit">
              Se connecter
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
