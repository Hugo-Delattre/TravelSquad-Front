import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CountryCard = ({countryData}) => {
  
  const countryName=countryData.name;
  const capitalizeFirstLetter = countryName => {
    return countryName.charAt(0).toUpperCase() + countryName.slice(1);
  };
  
  
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
        <Card.Header>{capitalizeFirstLetter(countryName)}
        {/* countryData.name.toUpperCase().charAt(0).slice(1) */}
        </Card.Header>
        <Card.Meta>
          {/* <span className="date">Joined in 2015</span> */}
        </Card.Meta>
        <Card.Description>
          De Tokyo, ville futuriste et trépidante, aux temples ancestraux de Kyoto
          en passant par les plages de sable blanc d'Okinawa, chaque région offre
          des paysages, des saveurs et des expériences uniques qui ne demandent
          qu'à être découverts.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       <a href="*">
          <Icon name="user" />
          22 Escouades disponibles
        </a>
      </Card.Content>
    </Card>
  </div>
);}

export default CountryCard;
