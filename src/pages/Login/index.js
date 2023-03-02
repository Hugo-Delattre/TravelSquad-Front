import { Form, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./style.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

 
 
 const Login = () => {
  const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/profile/", dataLogin)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      },[dataLogin]);
  };

  const [dataLogin,setdataLogin]=useState({
    Email:"",
    Password:"",
  })

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
                  value={dataLogin.Email}
                  placeholder="Email"
                  onChange={(e) => setdataLogin({...dataLogin,Email:e.target.value})}
                  required
                />
              </Form.Field>
              <Form.Field>
                <input
                  type="password"
                  value={dataLogin.Password}
                  onChange={(e) => setdataLogin({...dataLogin,Password:e.target.value})}
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

