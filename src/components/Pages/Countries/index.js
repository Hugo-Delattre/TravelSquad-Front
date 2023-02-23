import React from 'react'
import NavBar from '../../NavBar'
import Footer from '../../Footer'
import { NavLink } from "react-router-dom";
import CardExampleCard from '../../Card'



import "./style.scss";


const Countries = () => {
  return (

<div>   
    <NavBar />
  <section id="countries--section1">
  
  <div className='title--countries'> 
  <h1>Quelle sera votre prochaine destination ?</h1>
  <p>Découvrez de nouveaux horizons, rencontrez de nouvelles cultures.</p>
  </div>

    <div className='grid'>
    <NavLink to="/countries/group">
     
      <CardExampleCard  /></NavLink>
      
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      <CardExampleCard />
      
    </div>



</section>
<Footer />
</div>  
  );
}

export default Countries;

