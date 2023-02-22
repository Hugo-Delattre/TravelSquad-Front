import React from 'react'
import './style.scss'
import {NavLink} from "react-router-dom";
import { Divider } from "semantic-ui-react";


const Footer = () => { 

return (
  
       <div>
         <Divider />
         <footer className="footer--nav">
           
           
           <div className='footer--title__slogan'>
             
           <NavLink to="/">
             <h1> TravelSquad </h1>
             </NavLink>

             <p> Voyagez ensemble, créez des liens pour toujours. </p>
         
           </div>
         
           <div className='footer--list'>
             
           <NavLink className="animation--underline" to="/countries">
               <a href="">Découvrir les Pays</a> 
            </NavLink>   
               <a href="">Créer un groupe</a>
               <a href="">Mon Profil</a>
               <a href="">Equipe & Contact</a>
               
           </div>
         
         </footer>
       </div>
  );
};

export default Footer;


