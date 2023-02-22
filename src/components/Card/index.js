import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <Card>
    <Image
      src="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);














export default CardExampleCard;
