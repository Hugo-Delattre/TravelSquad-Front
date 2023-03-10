// import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import {
  capitalizeFirstLetter,
  formatDate,
  turnThemeIDintoThemeName,
} from "../../utils/textFormat";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

const GroupCard = ({ groupData, imgURL }) => {
  const [createInfo, setUserInfo] = useState("");

  const turnCreatorIdintoUserName = (creator_id) => {
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
              • <strong>Ville :</strong> {capitalizeFirstLetter(groupData.city)}
            </p>
            <p>
              • <strong>Langue :</strong>{" "}
              {capitalizeFirstLetter(groupData.language)}{" "}
            </p>
            <p>
              • <strong>Thème :</strong>{" "}
              {turnThemeIDintoThemeName(groupData.theme_id)}
            </p>
            {/* <p>
              • <strong>Capacité :</strong> De 2 à {groupData.max_members}
            </p> */}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="groupCard--bottomLine">
          
            
              {/* Créateur du groupe */}
           
            {/* <p>? / {groupData.max_members}</p> */}
            <a> 
            <Icon name="group" /> Jusqu'à {groupData.max_members} membres</a>
            {/* <Icon name="group" /> {groupData.max_members} membres max.</a> */}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default GroupCard;
