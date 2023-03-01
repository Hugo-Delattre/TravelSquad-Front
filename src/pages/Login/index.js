import React from "react";
import { Form, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import  { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./style.scss";

import { login } from "../../store/reducers/authSlice";
import { selectUser } from "../../store/reducers/authSlice";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';


const Login = ({test}) => {
  
  
  
  const user = useSelector(selectUser);  

  const dispatch = useDispatch();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleSubmit = (e) => {
      console.log(test);
      e.preventDefault();
      console.log("email", email, "password", password);  
      setIsLoggedIn(true);
      dispatch(login({
        email:email,
        password:password,
        // isLoggedIn:true,
      }))
    }

  return (

    <div id="log--container">
      {/* {user ? <Link to="/"/> : <p>caca</p>} */}
      {isLoggedIn ?  <Navigate replace to={"/"} /> : <p>Mot de passe incorrect</p>}
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
          <Form onSubmit={(e)=>handleSubmit(e)}>
            <Form.Field>
              <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
            </Form.Field>
            <Form.Field>
              <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
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
