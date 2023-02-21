import './App.scss';
import { FaBeer } from "react-icons/fa";
import { Divider } from "semantic-ui-react";
import Home from '../Pages/Home';
import NavBar from '../NavBar';
import Section2 from '../Pages/Home/Section2';
import Section3 from '../Pages/Home/Section3';

import CardExampleCard from '../Card';
import Footer from '../Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/* <Divider /> */}
      <Section2 />
      {/* <Divider /> */}
      <Section3 />
      <Divider />

      <Footer />
    </div>
  );
}

export default App;


