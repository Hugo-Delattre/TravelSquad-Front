import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { getToken } from "../../_services/account.service"
import { Icon, Divider, Loader } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import {
  capitalizeFirstLetter,
  capitalizeFirstLetters,
  formatDate,
  turnThemeIDintoThemeName,
} from "../../utils/textFormat";
import axiosInstance from "../../api/axiosInstance";
import MemberCard from "../../components/MemberCard";
import "./style.scss";


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
  
  const [groupInfo, setGroupInfo] = useState([]);
  const [membersData, setMembersData] = useState([]); 
  const [membersCount, setMembersCount] = useState(1);
   
  const [creatorEmail, setCreatorEmail] = useState(""); 
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
        setGroupInfo(response.data.oneGroup);
        setMembersCount(response.data.numberOfMembers[0].row_count); 
        setCreatorEmail(response.data.oneGroup.creator_email);
        setMembersData(response.data.oneGroup.members);
        console.log("membersData", response.data.oneGroup.members);
        console.log("response.data", response.data);
        setCountryName(capitalizeFirstLetter(capitalizeFirstLetters(response.data.oneGroup.country)));
        setTheme(capitalizeFirstLetter(response.data.oneGroup.theme));
        setCityName(capitalizeFirstLetter(response.data.oneGroup.city));
        setSpokenLanguage(capitalizeFirstLetter(response.data.oneGroup.language));
        setContent(capitalizeFirstLetter(response.data.oneGroup.content));
        setDescription(capitalizeFirstLetter(response.data.oneGroup.content));
        setTitle(capitalizeFirstLetter(response.data.oneGroup.name))
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    } else { navigate("/login") }
  }, []);

  
  // Inscription du membre au groupe (à empêcher si le groupe est plein)
  const handleSubscribeButton = () => {
    const data = {}; //userId non requis en data car présent dans le JWT
    const url = `/countries/groups/${params.id}/add`;
    console.log("jwt", jwt);
    axiosInstance
      .post(url, data, headers)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };


  return (
    <>
    {jwt && !isLoading ? (<section id="section--container">
        <div id="border--main">
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
               {membersCount} membre{membersCount > 1 && "s"} sur {groupInfo.max_members} places
            </li>
            <li>
              <Icon name="conversation" />{spokenLanguage}
            </li>
            <li>
              <Icon name="clipboard list" />
               {theme}
            </li>
            <li>
              <Icon name="mail" />
                {creatorEmail}
            </li>
          </ul>
          <Divider />
          
          
          
          
          <div className="membres--container">
            <div className="membres--title">
              <h3>Les membres du groupe :</h3>
            </div>
            {/* <div className="membres--left"> */}
            <div className="membres--grid">
              {membersData.map((member) => (
              
              <Link to={`/profile/${member.user_id}`}>
                <MemberCard memberName={member.first_name} />
              </Link>
              )
              )}
            </div>
          </div>
        </div>
        <button className="btn--register">
          <h3 onClick={handleSubscribeButton}>JE M'INSCRIS A CE GROUPE</h3>
        </button>
      </section>) : ( <div className="countries--loader">
          <Loader active inline="centered" />
        </div>)}
      
    </>
  );
};

export default Group;
