import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Icon,
  Checkbox,
  Divider,
  Image,
  Container,
  Header,
} from "semantic-ui-react";
import { capitalizeFirstLetter, formatDate } from "../../_services/textFormat.service";

import "./style.scss";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

const Group = ({ isLoggedIn }) => {
  const params = useParams();
  console.log("params", params);

  const [groupInfo, setGroupInfo] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/countries/groups/${params.id}`)
      .then((response) => {
        setGroupInfo(response.data);
        console.log("setGroupInfo", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubscribeButton = () => {
    //à voir si data est requis ou si le jwt est suffisant
    const data = { groupId: params.id, userId: 1 };
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

  // const capitalizeFirstLetter = (countryName) => {
  //   return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  // };

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
              <Icon name="users" /> 2 à {groupInfo.max_members} membres
            </li>
            <li>
              <Icon name="conversation" /> {groupInfo.language}
            </li>
            <li>
              <Icon name="clipboard list" /> Sportif
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
              <div className="membre">
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  size="mini"
                  circular
                />
                <p className="membre--name">Prénom</p>
                <Icon link name="close" size="large" />
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
