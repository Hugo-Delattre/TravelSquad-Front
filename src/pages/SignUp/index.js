import { NavLink,useNavigate } from "react-router-dom";
import "./style.scss";
import React, { useState } from "react";
import { accountService } from "../../_services/account.service";
import axiosInstance from "../../api/axiosInstance";
import { Form, TextArea,Select,Input } from "semantic-ui-react";
const Signup = () => {
  const countryOptions = [
    { key: "fr", value: "Chinois Mandarin", text: "Chinois Mandarin" },
    { key: "es", value: "L'espagnol", text: "L'espagnol" },
    { key: "us", value: "L'anglais", text: "L'anglais" },
    { key: "ja", value: "L'hindi", text: "L'hindi" },
    { key: "me", value: "L'arabe", text: "L'arabe" },
    { key: "th", value: " bengali", text: " bengali" },
    { key: "ma", value: "portugais", text: " portugais" },
    { key: "tu", value: " russe ", text: " russe" },
    { key: "ch", value: "japonais ", text: "japonais " },
    { key: "ch", value: " français ", text: "français" },
  ];

  const Gender = [
    { key: 'h', text: 'homme', value: 'homme' },
    { key: 'f', text: 'femme', value: 'femme' },
    { key: 'a', text: 'autre', value: 'autre' },
  ]
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axiosInstance.post("/myprofile",data)
      .then((res) => {
        accountService.saveToken(res.data.token)
        navigate('/login', {replace: true} )
         console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
       console.log(data);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    age: "",
    image:"",
    country_of_origin:'',
    sex:'',
    spoken_language:'',
    content: "",
  });

  const handleChangeCountry = (e, { value }) => {
    setData({ ...data, country_of_origin: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };

  const handleLanguageChange = (e, { value }) => {
    setData({ ...data, spoken_language: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };
  
  const handleSexChange = (e, { value }) => {
    setData({ ...data, sex: value });
    console.log(value); // Afficher la valeur sélectionnée dans la console
  };

  return (
    <div className="signup--container">
      <div className="signup--left">
        <div className="left--content">
          <div className="logo--left">
            <NavLink to="/">
              <h1>TravelSquad</h1>
            </NavLink>
          </div>
          <div className="welcome--content">
            <p>au plaisir de vous voir</p>
            <h1>BIENVENUE</h1>
            <i className="window minimize icon" size="big"></i>
            <p>
              Partez à la découverte des plus belles destinations <br />
              du monde et créez des souvenirs inoubliables
            </p>
          </div>
        </div>
      </div>
      <div className="signup--right">
        <div className="title--right">
          <h1>Inscription</h1>
        </div>
        <div className="fields--container">
          <div className="fields" onSubmit={handleSubmit}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Input
                name="firstName"
                value={data.firstName}
                label="Prenom"
                placeholder="Prenom"
                required
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />

              <Form.Input
                value={data.lastName}
                label="Nom"
                placeholder="Nom"
                required
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
              <Form.Input
                name="email"
                value={data.email}
                type="email"
                label="Adresse Electronique"
                placeholder="Email"
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              <Form.Input
                name="tel"
                value={data.phone}
                type="tel"
                pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                label="Numeros de telephone"
                placeholder="(+33)"
                required
                onChange={(e) => setData({ ...data, phone: e.target.value })}
              />

              <Form.Input
                name="password"
                value={data.password}
                type="password"
                label="Mot de passe"
                placeholder="mot de passe"
                required
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <Form.Input
                name="passwordConfirm"
                value={data.passwordConfirm}
                type="password"
                label="Comfirmation du mot de passe"
                placeholder="Confirmer le mot de passe"
                required
                onChange={(e) =>
                  setData({ ...data, passwordConfirm: e.target.value })
                }
              />
              <Form.Input
                value={data.age}
                type="number"
                label="Age"
                placeholder="Age"
                required
                onChange={(e) => setData({ ...data, age: e.target.value })}
              />
    
              <Form.Select
                options={countryOptions}
                label="langue parler"
                placeholder="langue parler"
                required
                value={data.spoken_language}
                onChange={handleLanguageChange}
               
              />
              <Form.Field
            control={Select}
            label='sex'
            value={data.sex}
            options={Gender}
            placeholder='sex'
            onChange={handleSexChange}/>


            <Form.Input type="url"
            placeholder="https://"
              label="Photo de profile"
            value={data.image}
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"
            onChange={(e) => setData({ ...data, image: e.target.value })}
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required />
             
               
       <Form.Select label="Pays" required placeholder='Select your country' value={data.country_of_origin} options={countryOptions} onChange={handleChangeCountry} />
              <Form.TextArea
                name="text"
                label="A propos de vous"
                value={data.content}
                placeholder="...."
                style={{ minWidth: 386 }}
                onChange={(e) =>
                  setData({ ...data, content: e.target.value })
                }/>
                
          
   
              

<NavLink to="/login"><p className="deja--membre">Deja membre?</p></NavLink>
              <button type="submit" className="btn--right">
                Click Here
              </button>
              
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
