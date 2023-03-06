import React, { useState, useEffect } from "react";
import { Image, Flag } from "semantic-ui-react";

import { accountService } from "../../../_services/account.service";
const ProfileSection1 = () => {
  const [profileData, setprofileData] = useState("");

  useEffect(() => {
    accountService
      .profile()
      .then((res) => {
        console.log(res.data);
        setprofileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="profile--section1">
      <div className="profile--flex">
        <Image
          src="https://ca.slack-edge.com/T041QTYGUBB-U04475B4Y3Y-b20ceafd3f78-512"
          size="medium"
          circular
          className="shadow"
        />
        <div>
          <h1>{profileData.firstName}</h1>
          <p>{profileData.content}</p>
          <ul className="profile--tag">
            <li>{profileData.age}</li>
            <li>{profileData.phone}</li>
            <li>{profileData.sex}</li>
            <li>{profileData.spoken_language}</li>
            <li>
              {profileData.country_of_origin}{" "}
              <Flag size="large" name="france" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ProfileSection1;
