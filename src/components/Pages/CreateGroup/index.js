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

return (
  <div>
    <NavBar />

    <section id="CreateGroup--section1">
      <div>
        <h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <Form className="CreateGroup--Title">
        <Form.Field required>
          <Input placeholder="Titre/intitulé" />
        </Form.Field>
      </Form>

      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-E-mail"
            placeholder="E-mail"
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            placeholder="Nombre de place de voyageurs"
          />
        </Form.Group>
      </Form>

      <Select placeholder="Tranche D'age" options={CreateGroupeAgeOptions} />
      <Select placeholder="Pays" options={CreateGroupePaysOptions} />
      <Select placeholder="Ville" options={CreateGroupeCityOptions} />
      <Select placeholder="Thème" options={CreateGroupeThemeOptions} />
      <Select placeholder="Langue du groupe" options={CreateGroupeLangue} />
    </section>

    <section>
      <label className="Create-Group--greyText" for="date²-input">
        Sélectionnez une date de départ et d'arrivée :
      </label>
      <input type="date" id="date-input" name="date" />

      {/* <label for="date²-input"></label> */}
      <input type="date" id="date-input" name="date" />
    </section>

    <section>
      <label className="Create-Group--greyText" for="date²-input">
        Décrivez votre voyage, activités prévues, ambiance, etc :
      </label>
      <textarea
        placeholder="ddddd"
        id="story"
        name="story"
        rows="5"
        cols="33"
      ></textarea>
    </section>
    <Button primary>Créer le groupe</Button>

    <Footer />
  </div>
);
}

export default CreateGroup