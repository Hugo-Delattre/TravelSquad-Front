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
import OtherUserProfile from "../../pages/otherUserProfile";
import Team from "../../pages/Team";
import NavBar from "../NavBar";
import Footer from "../Footer";
import NotFound from "../../pages/NotFound";
 
const App = () => {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/countries"
          element={<Countries />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/countries/:countryName"
          element={<Groups />}
        />
        <Route
          path="/countries/group/:id"
          element={<Group />}
        />
        <Route
          path="/create-group"
          element={<CreateGroup />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<OtherUserProfile />} />
        <Route path="/team" element={<Team />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
