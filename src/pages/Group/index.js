import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import { getToken } from "../../_services/account.service"
import {
  Icon,
  Checkbox,
  Divider,
  Image,
  Container,
  Header,
} from "semantic-ui-react";

import {
  capitalizeFirstLetter,
  formatDate,
  turnThemeIDintoThemeName,
} from "../../_services/textFormat.service";

import MemberCard from "../../components/MemberCard";

import "./style.scss";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

const Group = ({ isLoggedIn }) => {
  const params = useParams();
  // console.log("params", params);

  const [groupInfo, setGroupInfo] = useState([]);
  const [membersCount, setMembersCount] = useState(1);

  useEffect(() => {
    axiosInstance
      .get(`/countries/groups/${params.id}`)
      .then((response) => {
        setGroupInfo(response.data.oneGroup);
        setMembersCount(response.data.numberOfMembers);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [creatorMail, setCreatorMail] = useState("");
  const [creatorName, setCreatorName] = useState("");

  
  useEffect(()=> {
    
     const jwt = localStorage.getItem("token");
     const headers = {
       headers: {
         Authorization: `Bearer ${jwt}`,
       },
     };
    axiosInstance
      .get(`/profile/${groupInfo.creator_id}`, headers )
      .then((response) => {
      setCreatorMail(response.data.email);
      setCreatorName(response.data.firstName);
      console.log("creatorInfo", response.data);}, [])});

  const handleSubscribeButton = () => {
    const data = {}; //pas besoin de userId puisque c'est dans le JWT
    const url = `/countries/groups/${params.id}/add`;
    
    const jwt = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };

    console.log("jwt", jwt);

    axiosInstance
      .post(url, data, headers)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <section id="section--container">
        <div id="border--main">
          <h1>{groupInfo.name}</h1>
          <div id="desc--container">
            <div className="desc--voyage">
              <h3 className="membres--title">Présentation du voyage :</h3>
              <p>{groupInfo.content}</p>
            </div>
          </div>
          <Divider />
          <ul className="details--grid">
            <h3 className="membres--title">Les détails du groupe :</h3>
            <li>
              <Icon name="plane" />
              {groupInfo.city} ({groupInfo.country})
              {/* Erreur quand on fait ({capitalizeFirstLetter(groupInfo.country)}) -> cannot read properties of undefined (reading charAt) */}
            </li>
            <li>
              <Icon name="calendar alternate outline" />
              Du {formatDate(groupInfo.start)} au {formatDate(groupInfo.end)}
            </li>
            <li>
              <Icon name="users" /> {membersCount.length} membre(s) sur{" "}
              {groupInfo.max_members} places
            </li>
            <li>
              <Icon name="conversation" /> {groupInfo.language}
            </li>
            <li>
              <Icon name="clipboard list" />{" "}
              {turnThemeIDintoThemeName(groupInfo.theme_id)}
            </li>
            <li>
              <Icon name="mail" /> {creatorMail}
            </li>

            {/* <li>Groupe créé le</li> */}
          </ul>
          <Divider />
          <div className="membres--container">
            <div className="membres--title">
              <h3>Les membres du groupe :</h3>
            </div>

            {/* <div className="membres--left"> */}
            <div className="membres--grid">
              {/* {membersCount.map((member) => (
                <Link to="">
                  <MemberCard name={creatorName} isCreator={true} />
                </Link>
              ))} */}

            
              {/* <MemberCard />  */}
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">
                  Prénom
                  {/* (icône couronne) */}
                </p>
                {/* <Icon link name="close" size="large" /> */}
              </div>
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                {/* <Icon link name="close" size="large" /> */}
              </div>
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                {/* <Icon link name="close" size="large" /> */}
              </div>
            </div>
            {/* <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                <Icon link name="close" size="large" />
              </div> */}
            {/* </div> */}
            {/* <div className="membres--right">
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                <Icon link name="close" size="large" />
              </div>
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                <Icon link name="close" size="large" />
              </div>
            </div> */}
          </div>
        </div>
        <button className="btn--register">
          <h3 onClick={handleSubscribeButton}>JE M'INSCRIS A CE GROUPE</h3>
        </button>
      </section>
    </div>
  );
};

export default Group;
