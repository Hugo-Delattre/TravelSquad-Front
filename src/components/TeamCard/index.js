import React from 'react'
import { Image } from "semantic-ui-react";

import "./style.scss";

const TeamCard = ({teamInfo}) => {

  return (
    <div className="teamCard">
      <Image className="shadow"
        src="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg"
        size="small"
        circular
      />
      <h2>{teamInfo.name} {teamInfo.lastName}</h2>
      <p>
        {teamInfo.role} <br />
        {/* Contact */}
      </p>
    </div>
  );
}

export default TeamCard