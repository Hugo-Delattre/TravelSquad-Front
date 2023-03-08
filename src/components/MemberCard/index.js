import React, { useState, useEffect } from "react";
import { Icon, Image } from "semantic-ui-react";

import "./style.scss";

const MemberCard = ({memberName, memberImage}) => {
  
  // console.log("memberImage", memberImage);

  return (
    <div>
      {/* {memberImage ? ( */}
      <div className="membre">
        <Image src={memberImage} size="mini" circular />
        <p className="membre--name">{memberName}</p>
        {/* <Icon link name="close" size="large" /> */}
      </div>
      {/* ) : ( */}
      {/* <div className="membre">
        <Image
          src="https://react.semantic-ui.com/images/wireframe/square-image.png"
          size="mini"
          circular
        />
        <p className="membre--name">{memberName}</p> */}
        {/* <Icon link name="close" size="large" /> */}
      {/* </div> */}
      {/* )} */}
    </div>
  );
};

export default MemberCard;


// 