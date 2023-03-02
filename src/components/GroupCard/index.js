// import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./style.scss";

import axios from "axios";
// import axiosInstance from "../../api/axiosInstance";

// const axiosInstance = axios.create({
//   baseURL: "https://travelsquadb.up.railway.app/",
// });

const GroupCard = ({ item }) => {

  // const [countriesData, setCountriesData] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/countries/:countryName")
  //     .then((response) => {
  //       setCountriesData(response.data);
  //        console.log("countriesData", countriesData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);






  return (
    <div className="groupCard--hoverEffect">
      <Card>
        <Image
          src="https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg"
          wrapped
          ui={false}
        />
        <Card.Content className="groupCard">
          <Card.Header>Intitulé du voyage ({item.id})</Card.Header>
          <Card.Meta>
            <span className="date">Période de voyage</span>
          </Card.Meta>
          <Card.Description className="groupCard--description">
            <p>• Ville de destination</p>
            <p>• Langue du groupe</p>
            <p>• Thème</p>
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <div className="groupCard--bottomLine">
            <p>
              <Icon name="user circle" />
              Créateur du groupe
            </p>
            <p>3/4</p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default GroupCard;
