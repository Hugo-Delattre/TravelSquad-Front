import React from 'react'
import { Image } from "semantic-ui-react";

import "./style.scss";

const TeamCard = ({teamInfo}) => {

  return (
    <div className="teamCard">
      <Image className="shadow"
        src={teamInfo.url}
        size="small"
        circular
      />
      <h2>{teamInfo.name} {teamInfo.lastName}</h2>
      <p>
        {teamInfo.role1} <br />
        {teamInfo.role2}
        {/* Contact */}
      </p>
    </div>
  );
}

export default TeamCard