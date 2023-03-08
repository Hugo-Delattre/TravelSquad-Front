import React, { useState } from "react";
import { Image } from "semantic-ui-react";

import "./style.scss";

const MemberCard = ({ memberName, memberImage }) => {
  return (
    <div>
      <div className="membre">
        <Image src={memberImage} size="mini" circular />
        <p className="membre--name">{memberName}</p>
      </div>
    </div>
  );
};

export default MemberCard;
