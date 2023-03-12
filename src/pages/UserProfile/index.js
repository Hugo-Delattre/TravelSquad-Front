import { Divider } from "semantic-ui-react";
import { ActionFunction } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Image, Flag } from "semantic-ui-react";
import { useParams, Link } from "react-router-dom";
import { accountService } from "../../_services/account.service";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
// import GroupsProfile from "./groups";
// import ExperienceProfile from "./profile";
// import "./style.scss";

const OtherUserProfile = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log("params.id", params.id);

  //Récupération du jeton d'authentification.
  const jwt = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  const [profileData, setprofileData] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/profile/${params.id}`, headers) //10 à remplacer ici par le userID qu'on va pouvoir décoder à partir du JWT.
      .then((res) => {
        console.log(res.data);
        setprofileData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* sortir des composants ou renommer en + explicite */}
      {/* <ProfileSection1/> */}

      <section id="profile--section1">
        <div className="profile--flex">
          <Image
            src={profileData.image}
            size="medium"
            circular
            className="shadow"
          />
          <div>
            <h1>{profileData.firstName}</h1>
            <p>{profileData.content}</p>
            <ul className="profile--tag">
              <li>{profileData.age} ans</li>
              <li> Numéro de télephone: {profileData.phone} </li>
              <li> Sex : {profileData.sex}</li>
              <li> Langue parler : {profileData.spoken_language}</li>
              <li>
                pays de résidence : {profileData.country_of_origin}{" "}
                <Flag size="large" name="france" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* <Divider />
      <div className="section2and3--flexbox">
        <GroupsProfile />
        <ExperienceProfile />
      </div>  */}
    </>
  );
};

export default OtherUserProfile;
