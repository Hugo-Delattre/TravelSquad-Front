import React, { useState } from "react";
import { Image, Icon } from "semantic-ui-react";
import axiosInstance from "../../api/axiosInstance";
import "./style.scss";
// import axios from "axios";

const MemberCard = ({
  memberName,
  memberImage,
  user_id,
  isDeletable,
  groupID,
  jwt,
  headers,
}) => {
  const handleDeleteUser = () => {
    console.log("delete");
    console.log(`/countries/groups/${groupID}/remove/${user_id}`);
    axiosInstance
      .delete(`/countries/groups/${groupID}/remove/${user_id}`, headers)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <div {!isDeletable ?(className="membre") : (className="membre-deletable")}> */}
      <div className="membre">
        <Image src={memberImage} size="mini" circular />
        <p className="membre--name">{memberName}</p>
        {isDeletable && (
          <Icon size="large" name="close" onClick={handleDeleteUser} />
        )}
      </div>
    </div>
  );
};

export default MemberCard;
