import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import UserRecord from "./pages/UserRecord";

const App = () => {
  const [userDatas, setUserDatas] = useState([]);
  const [userValue, setUserValue] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
    userDate: "",
    userCity: "",
    userDistrict: "",
    userProvince: "",
    userCountry: "Nepal",
  });
  const [toggleButton, setToggleButton] = useState(false);
  const [getUpdateIndex, setGetUpdateIndex] = useState();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <UserRecord
              userDatas={userDatas}
              setUserDatas={setUserDatas}
              setUserValue={setUserValue}
              setToggleButton={setToggleButton}
              setGetUpdateIndex={setGetUpdateIndex}
              userValue={userValue}
              toggleButton={toggleButton}
              getUpdateIndex={getUpdateIndex}
            />
          }
        />

        <Route
          path="/profiles"
          element={
            <Profile
              userDatas={userDatas}
              setUserValue={setUserValue}
              setToggleButton={setToggleButton}
              setGetUpdateIndex={setGetUpdateIndex}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
