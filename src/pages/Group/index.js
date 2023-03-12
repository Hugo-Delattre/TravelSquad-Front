import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Icon, Divider, Loader, Button, Form } from "semantic-ui-react";

import { getToken } from "../../_services/account.service";
import {
  capitalizeFirstLetter,
  capitalizeFirstLetters,
  formatDate,
  lowerCaseFirstLetter,
  turnThemeNameIntoThemeID,
} from "../../utils/textFormat";
import axiosInstance from "../../api/axiosInstance";
import MemberCard from "../../components/MemberCard";
import "./style.scss";

const Group = () => {
  //Déclaration des hooks permettant la redirection et la récupération de l'id en URL.
  const navigate = useNavigate();
  const params = useParams();

  //Récupération du jeton d'authentification.
  const jwt = localStorage.getItem("token");
  const headers = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  //Déclaration des états.
  const [isLoading, setIsLoading] = useState(true);
  const [amIAMember, setAmIAMember] = useState(false);
  const [amITheCreator, setAmITheCreator] = useState(false);

  const [groupInfo, setGroupInfo] = useState([]);
  const [membersData, setMembersData] = useState([]);
  const [membersCount, setMembersCount] = useState(1);

  const [creatorEmail, setCreatorEmail] = useState("");
  const [creatorFirstName, setCreatorFirstName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("");
  const [themeID, setThemeID] = useState("");
  const [cityName, setCityName] = useState("");
  const [spokenLanguage, setSpokenLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const [myID, setMyID] = useState("");
  const [groupID, setGroupID] = useState("");

  // Accéder aux infos du groupe si le jwt est truthy. Sinon, rediriger vers la page de login.
  useEffect(() => {
    if (jwt) {
      axiosInstance
        .get(`/countries/groups/${params.id}`, headers)
        .then((response) => {
          //Récupération de notre userID.
          const decodedToken = jwt_decode(jwt);
          const myID = decodedToken.userId;
          setMyID(myID);
          console.log("userId", myID);

          setMembersCount(response.data.numberOfMembers[0].row_count);
          setCreatorEmail(response.data.oneGroup.creator_email);
          setCreatorFirstName(
            response.data.oneGroup.creator_name.split(" ")[0]
          );
          setMembersData(response.data.oneGroup.members);
          console.log("membersData", response.data.oneGroup.members);
          console.log("response.data", response.data);
          setCountryName(
            capitalizeFirstLetter(
              capitalizeFirstLetters(response.data.oneGroup.country)
            )
          );
          setTheme(capitalizeFirstLetter(response.data.oneGroup.theme));
          setThemeID(response.data.oneGroup.theme);
          setCityName(capitalizeFirstLetter(response.data.oneGroup.city));
          setSpokenLanguage(
            capitalizeFirstLetter(response.data.oneGroup.language)
          );
          setContent(capitalizeFirstLetter(response.data.oneGroup.content));
          setDescription(capitalizeFirstLetter(response.data.oneGroup.content));
          setTitle(capitalizeFirstLetter(response.data.oneGroup.name));
          setGroupInfo(response.data.oneGroup);
          setGroupID(response.data.oneGroup.id);
          console.log("groupID", response.data.oneGroup.id);

          //setAmIAMember
          const idMemberComparison = response.data.oneGroup.members.some(
            (member) => member.user_id === myID
          );
          if (idMemberComparison === true) {
            setAmIAMember(true);
          }

          // setAmITheCreator
          const idCreatorComparison =
            response.data.oneGroup.creator_id === myID;
          if (idCreatorComparison) {
            setAmITheCreator(true);
          } else if (!idCreatorComparison) {
            setAmITheCreator(false);
          }

          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, []);

  const handleContentChange = (event) => {
    setContent(event.target.value);
    console.log("content", content);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log("title", title);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);

  const handleEditOpenerButton = () => {
    setIsEditing(true);
  };

  const handleGroupUpdate = (e) => {
    e.preventDefault();
    console.log("tentative d'update");
    console.log("groupInfoNew", {
      city: groupInfo.city,
      content: content,
      country: groupInfo.country,
      end: groupInfo.end,
      language: groupInfo.language,
      max_members: groupInfo.max_members,
      name: title,
      start: groupInfo.start,
      theme_id: themeID,
    });
    axiosInstance
      .patch(
        `countries/groups/${params.id}`,
        {
          city: groupInfo.city,
          content: content,
          country: groupInfo.country,
          end: groupInfo.end,
          language: groupInfo.language,
          max_members: groupInfo.max_members,
          name: title,
          start: groupInfo.start,
          theme_id: turnThemeNameIntoThemeID(themeID),
        },
        headers
      )
      .then((res) => {
        console.log("Modification réussie");
        console.log(res.data);
        setIsEditing(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  // Inscription du membre au groupe (à empêcher si le groupe est plein)
  const handleSubscribeButton = () => {
    const data = {}; //userId non requis en data car présent dans le JWT
    const url = `/countries/groups/${params.id}/add`;
    console.log("jwt", jwt);
    axiosInstance
      .post(url, data, headers)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteGroupButton = () => {
    console.log("début de suppression", params.id);
    axiosInstance
      .delete(`/countries/groups/${params.id}`, headers)
      .then((res) =>
        navigate(`/countries/${lowerCaseFirstLetter(countryName)}`)
      )
      .catch((error) => console.error(error));
  };

  const handleSendMail = () => {
    const email = groupInfo.creator_email;
    const object = "Je souhaite rejoindre votre escouade";
    // const body = `Bonjour ${creatorFirstName}, (Renseignez ici votre message)`;
    const body = "";
    const mailtoLink =
      "mailto:" + email + "?subject=" + object + "&body=" + body;
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      {jwt && !isLoading ? (
        <section id="section--container">
          <div id="border--main">
            <>
              {!isEditing ? (
                <>
                  <h1>{title}</h1>
                  <div id="desc--container">
                    <div className="desc--voyage">
                      <h3 className="membres--title">
                        Présentation du voyage :
                      </h3>
                      <p>{content}</p>
                    </div>
                  </div>
                  <Divider />
                  <ul className="details--grid">
                    <h3 className="membres--title">Les détails du groupe :</h3>
                    <div>
                      <>
                        <li>
                          <Icon name="plane" />
                          {cityName} ({countryName})
                        </li>
                        <li>
                          <Icon name="calendar alternate outline" />
                          Du {formatDate(groupInfo.start)} au{" "}
                          {formatDate(groupInfo.end)}
                        </li>
                        <li>
                          <Icon name="users" />
                          {membersCount} membre{membersCount > 1 && "s"} sur{" "}
                          {groupInfo.max_members} places
                        </li>
                        <li>
                          <Icon name="conversation" />
                          {spokenLanguage}
                        </li>
                        <li>
                          <Icon name="clipboard list" />
                          {theme}
                        </li>
                        <li>
                          <Icon name="mail" />
                          {creatorEmail}
                        </li>
                      </>
                    </div>
                  </ul>
                  <Divider />
                  {amITheCreator && (
                    <div>
                      <button className="btn--edit">
                        <h3 onClick={handleEditOpenerButton}>
                          <Icon name="edit" />
                        </h3>
                      </button>
                      <Divider />
                    </div>
                  )}
                  <div className="membres--container">
                    <div className="membres--title">
                      <h3>Les membres du groupe :</h3>
                    </div>
                    {/* <div className="membres--left"> */}
                    <div className="membres--grid">
                      {membersData.map((member) => (
                        <Link to={`/profile/${member.user_id}`}>
                          <MemberCard
                            memberName={member.first_name}
                            memberImage={member.image}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Form onSubmit={handleGroupUpdate}>
                    {/* <h1>{title} </h1> */}
                    <Form.Input
                      label="Intitulé du voyage"
                      placeholder="Ex: Séjour à Tokyo, Escape Game à Paris, Springbreak à Cancún, ..."
                      value={title}
                      onChange={handleTitleChange}
                      minLength={2}
                      maxLength={64}
                    />

                    <div id="desc--container">
                      <div className="desc--voyage">
                        {/* <h3 className="membres--title">
                          Présentation du voyage :
                        </h3> */}
                        <Form.TextArea
                          className="end"
                          label="Présentation du voyage"
                          placeholder="Décrivez votre voyage, envies, idées d'activités, le profil des gens avec qui vous aimeriez voyager, etc"
                          id="story"
                          name="story"
                          rows="5"
                          cols="33"
                          value={content}
                          onChange={handleContentChange}
                        />
                      </div>
                    </div>
                    <Divider />
                    <ul className="details--grid">
                      <h3 className="membres--title">
                        Les détails du groupe :
                      </h3>
                      <div>
                        <>
                          <li>
                            <Icon name="plane" />
                            {cityName} ({countryName})
                          </li>
                          <li>
                            <Icon name="calendar alternate outline" />
                            Du {formatDate(groupInfo.start)} au{" "}
                            {formatDate(groupInfo.end)}
                          </li>
                          <li>
                            <Icon name="users" />
                            {membersCount} membre{membersCount > 1 && "s"} sur{" "}
                            {groupInfo.max_members} places
                          </li>
                          <li>
                            <Icon name="conversation" />
                            {spokenLanguage}
                          </li>
                          <li>
                            <Icon name="clipboard list" />
                            {theme}
                          </li>
                          <li>
                            <Icon name="mail" />
                            {creatorEmail}
                            {/* Votre email est modifiable depuis votre page de profil. */}
                          </li>
                        </>
                      </div>
                    </ul>
                    <Divider />
                    <Button primary type="submit">
                      Mettre à jour
                    </Button>
                    <Button onClick={() => setIsEditing(false)}>Annuler</Button>
                    <Divider />
                    <div className="membres--container">
                      <div className="membres--title">
                        <h3>Retirer un membre ?</h3>
                      </div>
                      {/* <div className="membres--left"> */}
                      <div className="membres--grid">
                        {membersData.map((member) =>
                          member.user_id !== myID ? (
                            <div className="flex--delete">
                              <MemberCard
                                memberName={member.first_name}
                                memberImage={member.image}
                                user_id={member.user_id}
                                isDeletable={true}
                                groupID={groupID}
                                jwt={jwt}
                                headers={headers}
                              />
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </>
          </div>

          {amITheCreator && (
            <button className="btn--delete">
              <h3 onClick={handleDeleteGroupButton}>
                <Icon name="trash alternate outline" />
                {/* SUPPRIMER LE GROUPE */}
              </h3>
            </button>
          )}

          {!amIAMember && !amITheCreator && (
            <button className="btn--register">
              <h3 onClick={handleSubscribeButton}>JE M'INSCRIS A CE GROUPE</h3>
            </button>
          )}

          {amIAMember && !amITheCreator && (
            <button onClick={handleSendMail} className="btn--joined">
              <h3>
                Vous faites partie de cette escouade <span>&#128293;</span>{" "}
                <br /> Cliquez ici pour contacter {creatorFirstName}, qui a créé
                ce groupe.
              </h3>
            </button>
          )}

          {/* {amITheCreator ? (
            <button className="btn--delete">
              <h3 onClick={handleDeleteGroupButton}>
                SUPPRIMER LE GROUPE
              </h3>
            </button>
          )} */}
        </section>
      ) : (
        <div className="countries--loader">
          <Loader active inline="centered" />
        </div>
      )}
    </>
  );
};

export default Group;
