import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { Image, Form, Button } from "semantic-ui-react";
import "./style.scss";
import { accountService } from "../../_services/account.service";
import axiosInstance from "../../api/axiosInstance";
import { genderOptions } from "../../data/options";
import { capitalizeFirstLetter } from "../../utils/textFormat";

const Profile = ({ onProfileImageChange }) => {
  const [profileData, setprofileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    age: "",
    image: "",
    country_of_origin: "",
    sex: "",
    spoken_language: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    accountService
      .profile()
      .then((res) => {
        setprofileData(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleSexChange = (e, { value }) => {
    setprofileData({ ...profileData, sex: value });
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    axiosInstance
      .patch("/myprofile", profileData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        console.log("Modification réussie");
        setIsEditing(false);
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
            {isEditing ? (
              <Form className="edit-form" onSubmit={handleProfileUpdate}>
                <Form.Input
                  name="firstName"
                  value={profileData.firstName}
                  label="Prénom / Surnom"
                  placeholder="Prénom / Surnom"
                  onChange={(e) =>
                    setprofileData({
                      ...profileData,
                      firstName: e.target.value,
                    })
                  }
                />
                <label>
                  <strong>Modifer votre âge</strong>
                  <input
                    type="number"
                    value={profileData.age}
                    onChange={(e) =>
                      setprofileData({ ...profileData, age: e.target.value })
                    }
                  />
                </label>

                <Form.Input
                  type="url"
                  placeholder="https://"
                  label="Photo de profil"
                  value={profileData.image}
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"
                  onChange={(e) =>
                    setprofileData({ ...profileData, image: e.target.value })
                  }
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                />
                {/* <Form.Field
            control={Select}
            label='sex'
            value={profileData.sex}
            options={genderOptions}
            placeholder='sex'
            onChange={handleSexChange}/> */}
                <label>
                  <strong>Modifier votre description</strong>
                  <input
                    type="text"
                    value={profileData.content}
                    onChange={(e) =>
                      setprofileData({
                        ...profileData,
                        content: e.target.value,
                      })
                    }
                  />
                </label>
                <Button primary type="submit">
                  Mettre à jour
                </Button>
                {/* <Button basic color="blue" onClick={() => setIsEditing(false)} >Annuler</Button> */}
                {/* <Button basic onClick={() => setIsEditing(false)} >Annuler</Button> */}
                <Button onClick={() => setIsEditing(false)}>Annuler</Button>
              </Form>
            ) : (
              <>
                <h1>{profileData.firstName}</h1>
                <p className="edit-icon">
                  <strong onClick={() => setIsEditing(true)}>
                    {/* <Icon name="paint brush" /> */}
                    <Icon name="edit" />
                    Modifier
                  </strong>
                </p>

                <p>{profileData.content}</p>
                <ul className="profile--tag">
                  {/* <Button basic color="blue">Test</Button> */}
                  <li>
                    {" "}
                    <Icon name="mail" /> {profileData.email}{" "}
                  </li>
                  <li>
                    <Icon name="user" />
                    {capitalizeFirstLetter(profileData.sex)}
                  </li>
                  <li>{profileData.age} ans</li>
                  <li> Langue principale : {profileData.spoken_language}</li>
                  <li>
                    Pays de résidence : {profileData.country_of_origin}{" "}
                    {/* <Flag size="large" name="france" /> */}
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
