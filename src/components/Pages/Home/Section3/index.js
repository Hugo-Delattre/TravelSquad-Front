import React from 'react'
import './style.scss'
import { Button } from "semantic-ui-react";
import CardExampleCard from '../../../Card';


const Section3 = () => {
  
  return (
    <div>
      <section id="section3">
          
        <div className="carrousel_container">
          <h1>Prêt(e) à rejoindre l'aventure ?</h1>
          <p>Choisissez votre pays de destination pour découvrir vos futurs partenaires de voyage.</p>
          <div className='carrousel'>
            <CardExampleCard />
            <CardExampleCard />
            <CardExampleCard />
          </div>
          <Button color="blue" className='customStyle'>
            Afficher toutes les destinations
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Section3;

