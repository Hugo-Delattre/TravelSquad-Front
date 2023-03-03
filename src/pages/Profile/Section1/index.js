import React from "react";
import { Image, Flag } from "semantic-ui-react";

const ProfileSection1 = () => {
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
          <h1>Badre AB</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eg. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cret, arcu. In enim justo,
            rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
            eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
            elementum semper nisi.
          </p>
          <ul className="profile--tag">
            <li>19 ans</li>
            <li>Les Ulis</li>
            <li>
              France <Flag size="large" name="france" />
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default ProfileSection1;
