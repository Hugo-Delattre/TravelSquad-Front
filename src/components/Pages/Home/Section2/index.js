import React from 'react'
import './style.scss'
const Section2 = () => {
  return (
    <section id="section2">
      <div className="container">
        <div className="block">
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt=""
          />
          <div className="block--title">
            <h2>Se faire des amis du monde entier tout en voyageant</h2>
            <p>
              Voyager est une expérience passionnante, mais qui peut se révéler
              solitaire si vos proches ne sont pas disponibles pour en profiter
              avec vous. Avec TravelSquad, vous pouvez trouver des compagnons de
              voyage qui partagent vos intérêts et vos passions. Vous pourrez
              explorer de nouveaux horizons avec des personnes de différentes
              cultures et partager des moments inoubliables ensemble. Qui sait,
              vous rencontrerez peut-être des personnes qui deviendront des amis
              pour la vie !
            </p>
          </div>
        </div>

        <div className="block">
          <div className="block--title">
            <h2>Profiter de la richesse culturelle de chacun</h2>
            <p>
              Voyager est l'un des meilleurs moyens de découvrir de nouvelles
              cultures, de goûter des plats locaux, de visiter des sites
              historiques et d'explorer les traditions et les coutumes de chaque
              destination. Alors quoi de mieux que de découvrir tout cela avec
              des locaux de la destination en question ! TravelSquad permet aux
              habitants d'une ville de rejoindre un groupe de voyageurs qui
              souhaitent la visiter. C'est gagnant - gagnant : Cela permet aux
              voyageurs de s'immerger dans la culture locale avec quelqu'un qui
              connaît bien la ville et ses bons plans, et cela permet aux locaux
              de rencontrer des gens du monde entier sans même quitter leur
              ville de résidence.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            alt=""
          />
        </div>

        <div className="block">
          <img
            src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80"
            alt=""
          />

          <div className="block--title">
            <h2>Des voyages en toute sérénité</h2>
            <p>
              La sécurité est une préoccupation majeure pour les voyageurs,
              voyager à plusieurs permet alors de profiter d'une meilleure
              sécurité lors son voyage. TravelSquad met également en place un
              système de vérification des profils ainsi qu'un système de
              notation et de commentaires, afin que chaque membre d'un groupe
              soit être assuré de voyager entre personnes de confiance. En
              rejoignant un groupe, nos utilisateurs ont la possibilité de
              communiquer entre eux par chat et par appel vocal afin de
              s'assurer qu'ils sont sur la même longueur d'onde tant au niveau
              de la personnalité que des envies de voyage.
              {/* <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              reiciendis soluta facere asperiores provident, <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              reiciendis soluta facere asperiores provident, */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;