import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

import {
  capitalizeFirstLetter,
  capitalizeFirstLetters,
} from "../../utils/textFormat";
import axiosInstance from "../../api/axiosInstance";
import "./style.scss";


const CountryCard = ({ countryData, groupMembersCount }) => {
  const countryName = countryData.name;

  const [squadsNumber, setSquadsNumber] = useState(0);

  useEffect(() => {
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
            {squadsNumber > 1
              ? `${squadsNumber} escouades disponibles`
              : `${squadsNumber} escouade disponible`}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CountryCard;
