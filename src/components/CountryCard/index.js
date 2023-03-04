import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const axiosInstance = axios.create({
  baseURL: "https://travelsquadb.up.railway.app/",
});




const CountryCard = ({ countryData }) => {
  const countryName = countryData.name;

  const capitalizeFirstLetter = (countryName) => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };

  console.log(countryData);

  return (
    <div className="groupCard--hoverEffect">
      <Card>
        <Image
          // src="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg"
          src={countryData.img_url}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{capitalizeFirstLetter(countryName)}</Card.Header>
          <Card.Meta></Card.Meta>

          <Card.Description>{countryData.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="*">
            <Icon name="user" />
            22 Escouades disponibles
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default CountryCard;
