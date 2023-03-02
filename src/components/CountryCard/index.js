import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CountryCard = ({ countryData }) => {
  const countryName = countryData.name;
  // `countries/${countryName}`
  
  const capitalizeFirstLetter = (countryName) => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };

  console.log(countryData);

  return (
    <div className="groupCard--hoverEffect">
      <Card>
        <Image
          // src="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg"
          src="https://www.routesdumonde.com/wp-content/uploads/2019/06/Thumbnail-Japon.jpg"
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
