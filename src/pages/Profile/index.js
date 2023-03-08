import React, { useState, useEffect } from "react";
import { Image, Flag } from "semantic-ui-react";
import './style.scss'
import { accountService } from "../../_services/account.service";
import axiosInstance from "../../api/axiosInstance";

const Profile = () => {
  const [profileData, setprofileData] = useState({
    firstName:"",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    accountService
      .profile()
      .then((res) => {
        setprofileData(res.data);
         console.log(res.data)
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleUsernameChange = event => {
    setprofileData({
      ...profileData,
      firstName: event.target.value
    });
  };

  const handleProfileUpdate = (e) => {
  e.preventDefault()
    const jwt = localStorage.getItem("token");
    axiosInstance
      .patch('/myprofile', profileData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        
       console.log("modification reussi")
        console.log(res.data)
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      {error && <div>Une erreur s'est produite: {error.message}</div>}
      <section id="profile--section1">
        <div className="profile--flex">
          <Image
            src={profileData.image}
            size="medium"
            circular
            className="shadow"
          />
          <div>
            
          <form onSubmit={handleProfileUpdate}>
        <label>
          Nom d'utilisateur :
          <input type="text" value={profileData.firstName} onChange={handleUsernameChange} />
        </label>
        <button type="submit" >Enregistrer</button>
      </form>
      


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
    </>
  );
};

export default Profile;
