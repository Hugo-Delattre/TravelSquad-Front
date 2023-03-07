import React from "react";
import { Icon, Image } from "semantic-ui-react";

import "./style.scss";

const MemberCard = ({name, isCreator}) => {
  return (
    <div className="membre">
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="mini"
        circular
      />
      <p className="membre--name">{name}</p>
      {/* <Icon link name="close" size="large" /> */}
    </div>
  );
};

export default MemberCard;
