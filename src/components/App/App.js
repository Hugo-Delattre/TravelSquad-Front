import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Countries from "../Pages/Countries";
import Home from "../Pages/Home";
import Groups from "../Pages/Groups";
import Group from "../Pages/Group";
import CreateGroup from "../Pages/CreateGroup";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Profile from "../Pages/Profile";
import Team from "../Pages/Team";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/countries/groups" element={<Groups />} />
        <Route path="/countries/group" element={<Group />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
