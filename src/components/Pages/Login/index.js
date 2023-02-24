import React from 'react'
import { Form,Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { NavLink } from "react-router-dom";
import './style.scss'

const Login = () => {
  return (
    <div id="log--container">
        <div id="left--side">
            <div className="left--logo--side">
                <h1>Travel Squad</h1>
            </div>
            <div className="content--welcome--left">
                <p>Au plaisir de vous revoir</p>
                <h1>BIENVENUE</h1>
                <i class="window minimize icon" size="big"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           Quasi ratione in omnis corporis fugiat, at maiores, tempora <br />
          nobis a optio voluptatibus quidem rerum voluptatem iste fugit <br />
          illum odit, expedita debitis.</p>
            </div>
        </div>
     
        <div className="right--side">
            <div className="right--content">
                <h1>Connexion au compte </h1>
               
            <Icon name='user circle' className='tata'  size='big'  />
                <Form>
            <Form.Field>
            <input type="email" placeholder='Email' required />
            </Form.Field>
            <Form.Field>
            <input type="password" placeholder='Mot de passe' required />
            </Form.Field>

            <NavLink to="/signup">
            <p className='redirect--login'>Pas encore membres?</p>
            </NavLink>

            <button className='log--submit' type='submit'>Se connecter</button>
        </Form>
        </div>
                </div>
                </div>
           
  )
}

export default Login