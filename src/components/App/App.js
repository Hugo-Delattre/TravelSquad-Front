import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Countries from "../../pages/Countries";
import Home from "../../pages/Home";
import Groups from "../../pages/Groups";
import Group from "../../pages/Group";
import CreateGroup from "../../pages/CreateGroup";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import Profile from "../../pages/Profile";
import Team from "../../pages/Team";
import NavBar from "../NavBar";
import Footer from "../Footer";
import NotFound from "../../pages/NotFound";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/countries"
          element={<Countries />}
        />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route
          path="/countries/:countryName"
          element={<Groups isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/countries/group"
          element={<Group isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/create-group"
          element={<CreateGroup isLoggedIn={isLoggedIn} />}
        />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route path="/team" element={<Team isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default App;
