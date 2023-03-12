import React, { Component } from "react";

import TeamCard from "../../components/TeamCard";
import { Card, Feed, Image, Transition, Button, List } from "semantic-ui-react";

import "./style.scss";

// Info team

const Team = () => {
  const teamInfo = {
    badreInfo: {
      name: "Badre",
      lastName: "Abouanane",
      role1: "Référent-Git",
      role2: "& Développeur Front",
      // url: "https://s.yimg.com/ny/api/res/1.2/.9y2gicVpv_0FUkYjonzGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/mma_junkie_usa_today_articles_344/618894e6e5e8c5c3f46ca13b0a23bfd7",
    },

    hugoInfo: {
      name: "Hugo",
      lastName: "Delattre",
      role1: "Product Owner",
      role2: "& Lead-Dev-Front",
      // url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },

    julianInfo: {
      name: "Julian",
      lastName: "Squedin",
      role1: "Scrum Master",
      role2: "& Développeur Back",
      // url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },

    ilhamInfo: {
      name: "Ilham",
      lastName: "Bennecib",
      role1: "Lead-Dev-Back",
      // role2: "Développeuse-Back",
      role2: "      ",
      // url: "https://cdn-icons-png.flaticon.com/512/209/209010.png",
    },

    mathisInfo: {
      name: "Mathis",
      lastName: "Guitton",
      role1: "Référent-techno",
      role2: "& Développeur Front",
      // url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },
  };

  return (
    <div className="Team-Area">
      <div className="Team--Title">
        <h1>L'équipe derrière TravelSquad</h1>
        <p>
          Nous sommes une équipe de 5 développeurs qui avons conçu et réalisé
          TravelSquad dans le cadre de notre projet de fin de formation au sein
          de l'école O'clock.
          {/* <br />
          Vous pouvez nous contacter par mail ou LinkedIn via les liens
          ci-dessous. */}
        </p>
      </div>

      <div className="Team--Info-flex">
        <TeamCard teamInfo={teamInfo.badreInfo} />
        <TeamCard teamInfo={teamInfo.ilhamInfo} />
        <TeamCard teamInfo={teamInfo.hugoInfo} />
        <TeamCard teamInfo={teamInfo.mathisInfo} />
        <TeamCard teamInfo={teamInfo.julianInfo} />
      </div>
    </div>
  );
};
export default Team;
