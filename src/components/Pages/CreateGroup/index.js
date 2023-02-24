import React from 'react'

import NavBar from '../../NavBar'
import Footer from "../../Footer";

import "./style.scss";

import { Form, Input,  Message, Select, Button, TextArea, input } from 'semantic-ui-react'

const CreateGroup = () => {

    const CreateGroupeAgeOptions = [
        
        { key: "ax", value: "ax", text: "18-25" },
        { key: "ax", value: "ax", text: "25-40" },
        { key: "al", value: "al", text: "40-60" },
        { key: "al", value: "al", text: "60-80" },
        { key: "al", value: "al", text: "(Aucune préférence)" },
      ];
      const CreateGroupeCityOptions = [
        { key: "af", value: "af", text: "Paris" },
        { key: "ax", value: "ax", text: "Tokyo" },
        { key: "af", value: "af", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "af", value: "af", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "af", value: "af", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "al", value: "al", text: "(sans préférence)" },
      ];
      const CreateGroupePaysOptions = [
        { key: "af", value: "af", text: "France" },
        { key: "ax", value: "ax", text: "Japon" },
        { key: "ax", value: "ax", text: "Angleterre" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "ax", value: "ax", text: "X" },
        { key: "al", value: "al", text: "(sans préférence)" },
      ];
      const CreateGroupeThemeOptions = [
        { key: "af", value: "af", text: "Thème X" },
        { key: "ax", value: "ax", text: "Thème X" },
        { key: "al", value: "al", text: "Thème X" },
        { key: "ax", value: "ax", text: "Thème X" },
        { key: "al", value: "al", text: "Thème X" },
        { key: "al", value: "al", text: "(sans préférence)" },
      ];

      const CreateGroupeLangue = [
        { key: "af", value: "af", text: "Langue X" },
        { key: "ax", value: "ax", text: "Langue X" },
        { key: "al", value: "al", text: "Langue X" },
        { key: "ax", value: "ax", text: "Langue X" },
        { key: "al", value: "al", text: "Langue X" },
        { key: "al", value: "al", text: "(sans préférence)" },
      ];
      const GenderOptions = [
        { key: "al", value: "al", text: "Mixte" },
        { key: "af", value: "af", text: "♂" },
        { key: "ax", value: "ax", text: "♀️" },
      ];

return (
  <>
    <NavBar />

    <div className='createGroup--pageContainer'>
    
        <div>
          <h1>Paré(e) à former votre propre groupe ?</h1>
          <p>Renseignez les champs de façon à être contacté(e) par les utilisateurs qui correspondent le mieux à vos critères.</p>
        </div>
      <section id="CreateGroup--section1">
      
       
      <h2>
          Informations principales concernant le voyage :
        </h2>
        <Form className="CreateGroup--Title">
          <Form.Field required>
            <Input placeholder="Intitulé du voyage" />
          </Form.Field>
        </Form>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-E-mail"
              placeholder="Email à laquelle les intéressés peuvent contacter"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              placeholder="Nombre de place de voyageurs"
            />
        {/* <Select placeholder="Pays" options={CreateGroupePaysOptions} /> */}
        <Select placeholder="Destination" options={CreateGroupeCityOptions} />
          </Form.Group>
        <textarea
          placeholder="Décrivez votre voyage, idées d'activité, ambiance, etc :"
          id="story"
          name="story"
          rows="5"
          cols="33"
        ></textarea>
        </Form>
      
      
      
      <h2>
          Vos critères concernant vos partenaires de voyage :
        </h2>
        <Select placeholder="Tranche d'âge" options={CreateGroupeAgeOptions} />
        <Select placeholder="Thème/Profil" options={CreateGroupeThemeOptions} />
        <Select placeholder="Langue du groupe" options={CreateGroupeLangue} />
        <Select placeholder="Genre des membres du groupe" options={GenderOptions} />
      
      <section id="CreateGroup--section2">
        {/* <label for="date²-input">
          Sélectionnez une date de départ et d'arrivée :
        </label> */}
        <h2>
          Sélectionnez votre date prévue de départ et d'arrivée :
        </h2>
        <input type="date" id="date-input" name="date" />
        {/* <label for="date²-input"></label> */}
        <input type="date" id="date-input" name="date" />
      </section>
      
      </section>
      <button className="btn--createGroup">
          <h3>CRÉER LE GROUPE</h3>
        </button>
      {/* <Button primary>CRÉER LE GROUPE</Button> */}
    </div>
      

    <Footer />
  </>
);
}

export default CreateGroup