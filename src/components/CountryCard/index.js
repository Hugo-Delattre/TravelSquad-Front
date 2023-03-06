import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import {
  capitalizeFirstLetter,
  capitalizeFirstLetters,
} from "../../_services/textFormat.service";

import "./style.scss";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});

const CountryCard = ({ countryData, groupMembersCount }) => {
  // console.log("groupMembersCount", groupMembersCount);
  // const [squadNumber, setSquadNumber] = useState("");

  
  const countryName = countryData.name;
  
  const [squadsNumber, setSquadsNumber] = useState(0);
  
  useEffect(() => {
    const countryName = countryData.name;

    const numberData = groupMembersCount.filter((element) => {
      return element.country === countryData.name;
    });

    setSquadsNumber(numberData[0].row_count);
    // console.log("members", numberData[0].row_count);
  }, []);
  


  return (
    
            <div className="groupCard--hoverEffect">
        <Card>
          <Image src={countryData.img_url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              {capitalizeFirstLetter(capitalizeFirstLetters(countryName))}
            </Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>{countryData.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="*">
              <Icon name="user" />
              { squadsNumber > 1 ? `${squadsNumber} escouades disponibles` : `${squadsNumber} escouade disponible` }
            </a>
          </Card.Content>
        </Card>
            </div>
  
  );
};

export default CountryCard;
