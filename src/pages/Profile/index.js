import React from "react";
import { Divider } from "semantic-ui-react";
import { ActionFunction } from "react-router-dom";
import ProfileSection1 from "./Section1";

import "./style.scss";
import ProfileSection2 from "./Section2";
import ProfileSection3 from "./Section3";

const Profile = () => {
  return (
    <>
    
      <ProfileSection1/>
      <Divider />
      <div className="section2and3--flexbox">
        <ProfileSection2 />
        <ProfileSection3 />
      </div>
    </>
  );
};

export default Profile;
