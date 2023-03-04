// import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

const GroupCard = ({ groupData, imgURL }) => {
  const capitalizeFirstLetter = (countryName) => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };

  const formatDate = (unformattedDate) => {
    const dateStr = unformattedDate;
    const dateObj = new Date(dateStr);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("fr-FR", options);
    return formattedDate;
  };

  const turnThemeIDintoThemeName = (theme_id) => {
    if (theme_id === 1) {
      return "Farniente";
    }
    if (theme_id === 2) {
      return "Culturel";
    }
    if (theme_id === 3) {
      return "Festif";
    }
    if (theme_id === 4) {
      return "Sportif";
    }
  };

  const [createInfo, setUserInfo] = useState("");

  const turnCreatorIdintoUserName = (creator_id) => {
    // faire une requête paramétrée vers l'utilisateur creator_id
    axiosInstance.get(`/profile/${creator_id}`).then();
  };

  return (
    <div className="groupCard--hoverEffect">
      <Card>
        <Image src={imgURL} wrapped ui={false} />
        <Card.Content className="groupCard">
          <Card.Header>{capitalizeFirstLetter(groupData.name)}</Card.Header>
          <Card.Meta>
            <span className="date">
              du {formatDate(groupData.start)} au {formatDate(groupData.end)}
            </span>
          </Card.Meta>
          <Card.Description className="groupCard--description">
            <p>
              • <strong>Ville :</strong> {capitalizeFirstLetter(groupData.city)}{" "}
            </p>
            <p>
              • <strong>Langue :</strong>{" "}
              {capitalizeFirstLetter(groupData.language)}{" "}
            </p>
            <p>
              • <strong>Thème :</strong>{" "}
              {turnThemeIDintoThemeName(groupData.theme_id)}
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="groupCard--bottomLine">
            <p>
              <Icon name="user circle" />
              Créateur du groupe
            </p>
            {/* <p>? / {groupData.max_members}</p> */}
             <p>De 2 à {groupData.max_members} Pers.</p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default GroupCard;
