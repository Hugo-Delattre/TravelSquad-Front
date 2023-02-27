import { Image, Divider } from "semantic-ui-react";
import "./style.scss";

import React from "react";

const ProfileGroupCard = () => {
  return (
    <div className="profile--section3-groupBlock">
      <div className="profile--section3-groupBlock-flexbox">
        <p>Espagne</p>
        <div className="profile--section3-groupBlock-flexbox-avatar">
          <Image
            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            size="mini"
            circular
          />
          <p>+3</p>
        </div>
      </div>
      <Divider />
      <p>
        Sic de isto et tutius perducit ad Sic de isto et tutius perducit ad Sic
        de isto et tutius perducit ad Sic de isto et tutius perducit ad Sic de
        isto et tutius perducit ad Sic de isto et tutius perducit ad
      </p>
    </div>
  );
};

export default ProfileGroupCard;
