Je me suis trop emmêlé les pinceaux, je repars de mon point de départ qui fonctionnait bien.
Je garde ici le code où je m'étais embrouillé pour le patch (mix de la méthode de badre et de la mienne, je pense vu le peu de temps il ne faut pas que je convertisse tout à la méthode de Badre même si je la trouve mieux, je vais rester sur la méthode que j'ai utilisé avec les useState)



import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Form, Icon, Divider, Loader, Button } from "semantic-ui-react";

import { getToken } from "../../_services/account.service";
import {
  capitalizeFirstLetter,
  capitalizeFirstLetters,
  formatDate,
  lowerCaseFirstLetter,
} from "../../utils/textFormat";
import axiosInstance from "../../api/axiosInstance";
import MemberCard from "../../components/MemberCard";
import "./style.scss";
import { themeOptions } from "../../data/options";

const Group = () => {
  //Déclaration des hooks permettant la redirection et la récupération de l'id en URL.
  const navigate = useNavigate();
  const params = useParams();

  //Récupération du jeton d'authentification.
  const jwt = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  //Déclaration des états.
  const [isLoading, setIsLoading] = useState(true);
  const [amIAMember, setAmIAMember] = useState(false);
  const [amITheCreator, setAmITheCreator] = useState(false); // à metttre sur false. Possibilité de passer temporairement sur true pour pouvoir supprimer n'importe quel groupe côté dev.
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  
  const [groupInfo, setGroupInfo] = useState({
    city: "",
    content: "",
    country: "",
    creator_email: "",
    creator_id: "",
    creator_image: "",
    creator_name: "",
    start: "",
    end :"",
    id: "",
    language: "",
    max_members: "",
    members: [],
    name: "",
    theme: "",
  });
  
  
  const handleEditOpenerButton = () => {
    setIsEditing(true);
  }
  

  // const [membersData, setMembersData] = useState([]);
  // const [creatorEmail, setCreatorEmail] = useState("");
  // const [theme, setTheme] = useState("");
  
  const [membersData, setMembersData] = useState([]);
  const [membersCount, setMembersCount] = useState(1);
  const [creatorEmail, setCreatorEmail] = useState("");
  const [creatorFirstName, setCreatorFirstName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("");
  const [cityName, setCityName] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  
  

  // Accéder aux infos du groupe si le jwt est truthy. Sinon, rediriger vers la page de login.
  useEffect(() => {
    if (jwt) {
      axiosInstance
        .get(`/countries/groups/${params.id}`, headers)
        .then((response) => {
          //Récupération de notre userID.
          const decodedToken = jwt_decode(jwt);
          const myID = decodedToken.userId;
          console.log("userId", myID);
          
          setMembersCount(response.data.numberOfMembers[0].row_count);
          setCreatorFirstName(
            response.data.oneGroup.creator_name.split(" ")[0]
            );
            // setCreatorEmail(response.data.oneGroup.creator_email);
          // setMembersData(response.data.oneGroup.members);
          // console.log("membersData", response.data.oneGroup.members);
          setCountryName(
            capitalizeFirstLetter(
              capitalizeFirstLetters(response.data.oneGroup.country)
            )
          );
          // setTheme(capitalizeFirstLetter(response.data.oneGroup.theme));
          setCityName(capitalizeFirstLetter(response.data.oneGroup.city));
          setSpokenLanguage(
            capitalizeFirstLetter(response.data.oneGroup.language)
            );
          setContent(capitalizeFirstLetter(response.data.oneGroup.content));
          setDescription(capitalizeFirstLetter(response.data.oneGroup.content));
          setTitle(capitalizeFirstLetter(response.data.oneGroup.name));
          setGroupInfo(response.data.oneGroup);
          console.log("groupInfo", response.data.oneGroup);
          
          
          //setAmIAMember
          const idMemberComparison = response.data.oneGroup.members.some(
            (member) => member.user_id === myID
          );
          if (idMemberComparison === true) {
            setAmIAMember(true);
          }

          // setAmITheCreator
          const idCreatorComparison =
            response.data.oneGroup.members[0].user_id === myID;
          if (idCreatorComparison) {
            setAmITheCreator(true);
          // } else if (!idCreatorComparison) {
          //   setAmITheCreator(false);
          }
          console.log(groupInfo);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, []);

  // Inscription du membre au groupe (à empêcher si le groupe est plein)
  const handleSubscribeButton = () => {
    const data = {}; //userId non requis en data car présent dans le JWT
    const url = `/countries/groups/${params.id}/add`;
    console.log("jwt", jwt);
    axiosInstance
      .post(url, data, headers)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteGroupButton = () => {
    console.log("début de suppression", params.id);
    axiosInstance
      .delete(`/countries/groups/${params.id}`, headers)
      .then((res) =>
        navigate(`/countries/${lowerCaseFirstLetter(countryName)}`)
      )
      .catch((error) => console.error(error));
  };

  // Variable de la date minimale pour l'input date de départ
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  
  
  const handleSendMail = () => {
    const email = groupInfo.creator_email;
    const object = "Je souhaite rejoindre votre escouade"
    // const body = `Bonjour ${creatorFirstName}, (Renseignez ici votre message)`;
    const body = "";
    const mailtoLink = "mailto:" + email + "?subject=" + object + "&body=" + body;
    window.open(mailtoLink, "_blank");
  };
  
  const handleGroupUpdate = (e) => {
    e.preventDefault();
    console.log(content)
    axiosInstance
      .patch(`countries/groups/${params.id}`, {content: content}, headers)
      .then((res) => {
        console.log("Modification réussie");
        console.log(res.data);
        setIsEditing(false);
      } )
      .catch((error => {
        setError(error);
      }))
  }

  return (
    <>
      {jwt && !isLoading ? (
        
        
        <>
          <section id="section--container">
          
        { isEditing ? (
        
        
        
        //IS EDITING
        <> 
        <Form onSubmit={handleGroupUpdate}>
          
          <Form.Input
                    label="Intitulé du voyage"
                    placeholder="Ex: Séjour à Tokyo, Escape Game à Paris, Springbreak à Cancún, ..."
                    value={groupInfo.name}
                    onChange={(e) => setGroupInfo({...groupInfo, name: e.target.value})}
                    minLength={2}
                    maxLength={64}
              
                  />
                  
          <Form.TextArea
                      className="end"
                      label="Décrivez votre voyage"
                      placeholder="Décrivez votre voyage, envies, idées d'activités, le profil des gens avec qui vous aimeriez voyager, etc"
                      id="story"
                      name="story"
                      rows="5"
                      cols="33"
                      // min="2"
                      // max="1000"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
               
                    />
          
          {/* <Form.Input
                      type="date"
                      label="Date de début"
                      id="date-departure-input"
                      name="date"
                      value={groupInfo.start}
                      onChange={(e) => setGroupInfo({...groupInfo, start: e.target.value})}
                      min={tomorrowString}
                 
                    />
                    <Form.Input
                      type="date"
                      label="Date de fin"
                      id="date-arrival-input"
                      name="date"
                      value={groupInfo.end}
                      onChange={(e) => setGroupInfo({...groupInfo, end: e.target.value})}
                      min={groupInfo.start}
                 
                    /> */}
          <Form.Input
                    label="Nombre de places maximal dans le groupe"
                    type="number"
                    min="2"
                    max="10"
                    fluid
                    id="form-subcomponent-shorthand-input-last-name"
                    placeholder="Ex: 2, 3, 5, ..."
                    value={groupInfo.max_members}
                    onChange={(e) => setGroupInfo({...groupInfo, max_members: e.target.value})}
            
                  />
                  
          <Form.Input
                    label="Langue(s) principale(s) du groupe"
                    placeholder="Français, Anglais, ..."
                    // options={languageOptions}
                    value={groupInfo.language}
                    onChange={(e) => setGroupInfo({...groupInfo, language: e.target.value})}
                    // min="3"
                    // max="64"
                    minLength={3}
                    maxLength={64}
            
                  />
          
           <Form.Select
                    label="Thème du voyage"
                    placeholder="Culturel, sportif, ..."
                    options={themeOptions}
                    value={groupInfo.theme}
                    onChange={(e, {value}) =>
                    setGroupInfo({ ...groupInfo, theme: value })}
               
                  />
          
                  
          <Button primary type="submit">
                  Mettre à jour
           </Button>
                <Button basic color="blue" onClick={() => setIsEditing(false)} >Annuler</Button>        
          
        
          <div id="border--main">
                {amITheCreator && (
                <button className="btn--edit">
                  <h3 onClick={handleEditOpenerButton}>
                    <Icon name="edit" />
                    {/* SUPPRIMER LE GROUPE */}
                  </h3>
                </button>
              )}
                <h1>{title}</h1>
          
          
          
                <div id="desc--container">
                  <div className="desc--voyage">
                    <h3 className="membres--title">Présentation du voyage :</h3>
                    <p>{content}</p>
                  </div>
                </div>
                <Divider />
                <ul className="details--grid">
                  <h3 className="membres--title">Les détails du groupe :</h3>
                  <li>
                    <Icon name="plane" />
                    {capitalizeFirstLetter(groupInfo.city)} ({countryName})
                  </li>
                  <li>
                    <Icon name="calendar alternate outline" />
                    Du {formatDate(groupInfo.start)} au {formatDate(groupInfo.end)}
                  </li>
                  <li>
                    <Icon name="users" />
                    {membersCount} membre{membersCount > 1 && "s"} sur{" "}
                    {groupInfo.max_members} places
                  </li>
                  <li>
                    <Icon name="conversation" />
                    {spokenLanguage}
                  </li>
                  <li>
                    <Icon name="clipboard list" />
                    {capitalizeFirstLetter(groupInfo.theme)}
                  </li>
                  <li>
                    <Icon name="mail" />
                    {groupInfo.creator_email} (Vous pouvez modifier votre mail depuis votre page de profil)
                  </li>
                </ul>
                <Divider />
                <div className="membres--container">
                  <div className="membres--title">
                    <h3>Les membres du groupe :</h3>
                  </div>
                  {/* <div className="membres--left"> */}
                  <div className="membres--grid">
                    {groupInfo.members.map((member) => (
                      <Link to={`/profile/${member.user_id}`}>
                        <MemberCard
                          memberName={member.first_name}
                          memberImage={member.image}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {amITheCreator && (
                <button className="btn--delete">
                  <h3 onClick={handleDeleteGroupButton}>
                    <Icon name="trash alternate outline" />
                    {/* SUPPRIMER LE GROUPE */}
                  </h3>
                </button>
              )}
              {!amIAMember && !amITheCreator && (
                <button className="btn--register">
                  <h3 onClick={handleSubscribeButton}>JE M'INSCRIS A CE GROUPE</h3>
                </button>
              )}
              {amIAMember && !amITheCreator && (
                <button onClick={handleSendMail} className="btn--joined">
                  <h3>
                    Vous faites partie de cette escouade <span>&#128293;</span>{" "}
                    <br /> Cliquez ici pour contacter {creatorFirstName}, qui a créé
                    ce groupe.
                  </h3>
                </button>
              )} </Form>
              </>
              
              
              
              
              )
               : 
              (
                
               //IS NOT EDITING (default display) 
              <>
               
               <div id="border--main">
                {amITheCreator && (
                <button className="btn--edit">
                  <h3 onClick={handleEditOpenerButton}>
                    <Icon name="edit" />
                    {/* SUPPRIMER LE GROUPE */}
                  </h3>
                </button>
              )}
                <h1>{title}</h1>
          
          
          
                <div id="desc--container">
                  <div className="desc--voyage">
                    <h3 className="membres--title">Présentation du voyage :</h3>
                    <p>{content}</p>
                  </div>
                </div>
                <Divider />
                <ul className="details--grid">
                  <h3 className="membres--title">Les détails du groupe :</h3>
                  <li>
                    <Icon name="plane" />
                    {cityName} ({countryName})
                  </li>
                  <li>
                    <Icon name="calendar alternate outline" />
                    Du {formatDate(groupInfo.start)} au {formatDate(groupInfo.end)}
                  </li>
                  <li>
                    <Icon name="users" />
                    {membersCount} membre{membersCount > 1 && "s"} sur{" "}
                    {groupInfo.max_members} places
                  </li>
                  <li>
                    <Icon name="conversation" />
                    {spokenLanguage}
                  </li>
                  <li>
                    <Icon name="clipboard list" />
                    {capitalizeFirstLetter(groupInfo.theme)}
                  </li>
                  <li>
                    <Icon name="mail" />
                    {groupInfo.creator_email}
                  </li>
                </ul>
                <Divider />
                <div className="membres--container">
                  <div className="membres--title">
                    <h3>Les membres du groupe :</h3>
                  </div>
                  {/* <div className="membres--left"> */}
                  <div className="membres--grid">
                    {groupInfo.members.map((member) => (
                      <Link to={`/profile/${member.user_id}`}>
                        <MemberCard
                          memberName={member.first_name}
                          memberImage={member.image}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {amITheCreator && (
                <button className="btn--delete">
                  <h3 onClick={handleDeleteGroupButton}>
                    <Icon name="trash alternate outline" />
                    {/* SUPPRIMER LE GROUPE */}
                  </h3>
                </button>
              )}
              {!amIAMember && !amITheCreator && (
                <button className="btn--register">
                  <h3 onClick={handleSubscribeButton}>JE M'INSCRIS A CE GROUPE</h3>
                </button>
              )}
              {amIAMember && !amITheCreator && (
                <button onClick={handleSendMail} className="btn--joined">
                  <h3>
                    Vous faites partie de cette escouade <span>&#128293;</span>{" "}
                    <br /> Cliquez ici pour contacter {creatorFirstName}, qui a créé
                    ce groupe.
                  </h3>
                </button>
              )}
              {/* {amITheCreator ? (
                <button className="btn--delete">
                  <h3 onClick={handleDeleteGroupButton}>
                    SUPPRIMER LE GROUPE
                  </h3>
                </button>
              )} */}
        </>
        
        )}
            
          </section>
        </>
      ) : (
        <div className="countries--loader">
          <Loader active inline="centered" />
        </div>
      )}
    </>
  );
};

export default Group;
