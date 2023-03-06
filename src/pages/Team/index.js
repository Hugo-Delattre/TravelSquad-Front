import React from "react";

import TeamCard from "../../components/TeamCard";
import { Card, Feed, Image} from "semantic-ui-react";

import "./style.scss";

const Team = () => {
  const teamInfo = {
    badreInfo: {
      name: "Badre",
      lastName: "Abouanane",
      role: "Référent-Git / Développeur-Front",
      url: "https://s.yimg.com/ny/api/res/1.2/.9y2gicVpv_0FUkYjonzGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/mma_junkie_usa_today_articles_344/618894e6e5e8c5c3f46ca13b0a23bfd7",
    },

    hugoInfo: {
      name: "Hugo",
      lastName: "Delattre",
      role: " Product Owner / Lead-Dev-Front ",
      url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },

    julianInfo: {
      name: "Julian",
      lastName: "Squedin",
      role: "Scrum Master / Develloppeur-Back",
      url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },

    ilhamInfo: {
      name: "Ilham",
      lastName: "Bennecib",
      role: "Lead-Dev-Back / Développeuse-Back",
      url: "https://cdn-icons-png.flaticon.com/512/209/209010.png",
    },

    mathisInfo: {
      name: "Mathis",
      lastName: "Guitton",
      role: "Référent-techno / Dev-Front",
      url: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
    },
  };

  return (
    <div>
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

      <div className="Team--Info-flex">
         
         <TeamCard teamInfo={teamInfo.badreInfo} />
         <TeamCard teamInfo={teamInfo.hugoInfo} />
         <TeamCard teamInfo={teamInfo.julianInfo} />
         <TeamCard teamInfo={teamInfo.ilhamInfo} />
         <TeamCard teamInfo={teamInfo.mathisInfo} />

       </div>

      <div className="Team--Info">
        <Card className="Team--Info-flex-2">
          <Card.Content>
            <Feed>
              <Feed.Event> 
                <Feed.Label image="https://s.yimg.com/ny/api/res/1.2/.9y2gicVpv_0FUkYjonzGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://media.zenfs.com/en/mma_junkie_usa_today_articles_344/618894e6e5e8c5c3f46ca13b0a23bfd7" /> 
                <Feed.Content>
                  <Feed.Date content="" />
                  <Feed.Summary>Abouanane Badre</Feed.Summary>
                  <Feed.Summary>
                    Linkedin : <a> badre-abouanane </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Delattre Hugo</Feed.Summary>

                  <Feed.Summary>
                    Linkedin : <a> hugo-delattre </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Squedin Julian</Feed.Summary>
     
                  <Feed.Summary>
                  Linkedin: <a>  julian squedin </a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Bennecib Ilham</Feed.Summary>

                  <Feed.Summary>
                    Linkedin: <a>  ilham-bennecib </a> 
                
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://cdn-icons-png.flaticon.com/512/21/21104.png" />
                <Feed.Content>
                  <Feed.Date content="" />

                  <Feed.Summary>Guitton Mathis</Feed.Summary>

                  <Feed.Summary>
                    E-mail : <a>mathis.guitton01@hotmail.com</a>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>

       
      </div>
    </div>
  );
};
export default Team;
