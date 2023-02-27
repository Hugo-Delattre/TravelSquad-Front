import React from "react";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import TeamCard from "../../components/TeamCard";

import { Card, Feed } from "semantic-ui-react";

import "./style.scss";

const Team = () => {
  const teamInfo = {
    julianInfo: {
      name: "Julian",
      lastName: "Squedin",
      role: "Scrum Master / Dev-Back",
    },
    badreInfo: {
      name: "Badre",
      lastName: "Abouanane",
      role: "Référent-Git / Dev-Front",
    },
    ilhamInfo: {
      name: "Ilham",
      lastName: "Bennecib",
      role: "Lead-Dev-Back",
    },
    hugoInfo: {
      name: "Hugo",
      lastName: "Delattre",
      role: "Lead-Dev-Front / Product Owner",
    },
    mathisInfo: {
      name: "Mathis",
      lastName: "Guitton",
      role: "Référent-technologique / Dev-Front",
    },
  };

  return (
    <div>
      <NavBar />

      <div className="Team--Title">
        <h1>L'équipe derrière TravelSquad</h1>
        <p>
          Nous sommes une équipe de 5 développeurs qui avons conçu et réalisé
          TravelSquad dans le cadre de notre projet de fin de formation au sein
          de l'école O'clock.
          <br />
          Vous pouvez nous contacter par mail ou LinkedIn via les liens
          ci-dessous.
        </p>
      </div>

      <div className="Team--Info">
        <Card className="Team--Info-flex-2">
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Abouanane Badre</Feed.Summary>

                  <Feed.Summary>Réferent-Git / Dev-Front</Feed.Summary>

                  <Feed.Summary>
                    Linkedin : <a> badre-abouanane </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Delattre Hugo</Feed.Summary>

                  <Feed.Summary>
                    Lead-Dev-Front / Product-Owner / Dev-Front
                  </Feed.Summary>

                  <Feed.Summary>
                    Linkedin : <a> hugo delattre </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Squedin Julian</Feed.Summary>

                  <Feed.Summary>Scrum-Master / Dev-Back</Feed.Summary>

                  <Feed.Summary>
                    E-mail : <a> XXX </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Bennecib Ilham</Feed.Summary>

                  <Feed.Summary>Lead-Dev-Back / Dev-Back</Feed.Summary>

                  <Feed.Summary>
                    E-mail : <a> XXX </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://i.pinimg.com/564x/f8/c5/d0/f8c5d06275fdc056a2b2f97a962c3dad.jpg" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Guitton Mathis</Feed.Summary>

                  <Feed.Summary>
                    Réferent-technologique / Dev-Front
                  </Feed.Summary>

                  <Feed.Summary>
                    E-mail : <a>mathis.guitton01@hotmail.com</a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>

        <div className="Team--Info-flex">
          <TeamCard teamInfo={teamInfo.badreInfo} />
          <TeamCard teamInfo={teamInfo.julianInfo} />
          <TeamCard teamInfo={teamInfo.ilhamInfo} />
          <TeamCard teamInfo={teamInfo.hugoInfo} />
          <TeamCard teamInfo={teamInfo.mathisInfo} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Team;
