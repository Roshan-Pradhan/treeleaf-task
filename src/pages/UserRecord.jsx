import React, { useEffect, useState } from "react";
import "./Home.css";
import { province } from "../utils/Province";
import UserTable from "./UserTable";
import { useNavigate } from "react-router-dom";

const UserRecord = ({
  userDatas,
  userValue,
  getUpdateIndex,
  toggleButton,
  setUserDatas,
  setUserValue,
  setToggleButton,
  setGetUpdateIndex,
}) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toggleButton) {
      if (userValue.userNumber.length <= 7) {
        return setError("Please enter atleast 7digits PhoneNumber.");
      } else {
        setError("");
      }
      const existingData =
        JSON.parse(localStorage.getItem("user-record")) || [];
      const multipleData = [...existingData, userValue];
      localStorage.setItem("user-record", JSON.stringify(multipleData));
      setUserDatas(multipleData);
      setUserValue({
        userName: "",
        userEmail: "",
        userNumber: "",
        userDate: "",
        userCity: "",
        userDistrict: "",
        userProvince: "",
        userCountry: "Nepal",
      });
    } else {
      const existingData =
        JSON.parse(localStorage.getItem("user-record")) || [];
      existingData[getUpdateIndex] = userValue;
      localStorage.setItem("user-record", JSON.stringify(existingData));
      setUserDatas(existingData);
      setToggleButton(false);
      setUserValue({
        userName: "",
        userEmail: "",
        userNumber: "",
        userDate: "",
        userCity: "",
        userDistrict: "",
        userProvince: "",
        userCountry: "Nepal",
      });
    }
  };

  const handleNavigation = () => {
    navigate("/profiles");
  };

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("user-record")) || [];
    setUserDatas(existingData);
  }, []);

  return (
    <>
      <div className="formwrapper">
        <h1>User's Records</h1>
        <form className="crudForm" onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Name:
              <span className="requiredField">*</span>
            </legend>
            <input
              name="userName"
              type="text"
              value={userValue ? userValue.userName : ""}
              placeholder="Enter your name"
              required
              className="inputField"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <legend>
              Email:
              <span className="requiredField">*</span>
            </legend>
            <input
              type="email"
              value={userValue ? userValue.userEmail : ""}
              name="userEmail"
              placeholder="Enter your email"
              required
              className="inputField"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <legend>
              Phone Number:
              <span className="requiredField">*</span>
            </legend>
            <input
              type="number"
              name="userNumber"
              value={userValue ? userValue.userNumber : ""}
              placeholder="Enter your phone number"
              required
              className="inputField"
              onChange={handleChange}
              maxLength="7"
            />
          </fieldset>
          <fieldset>
            <legend>Date of Birth:</legend>
            <input
              type="date"
              name="userDate"
              value={userValue ? userValue.userDate : ""}
              placeholder="Pick your DOB"
              className="inputField"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="addressFieldSet">
            <legend>Address</legend>
            <fieldset>
              <legend>City:</legend>
              <input
                type="text"
                name="userCity"
                value={userValue ? userValue.userCity : ""}
                placeholder="Enter your city"
                className="inputField"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <legend>District:</legend>
              <input
                type="text"
                name="userDistrict"
                value={userValue ? userValue.userDistrict : ""}
                placeholder="Enter your district"
                className="inputField"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset className="selectFieldset">
              <legend>Select Province</legend>
              <select
                name="userProvince"
                value={userValue ? userValue.userProvince : ""}
                className="inputField"
                onChange={handleChange}
              >
                  <option value="none" selected hidden>Select Province</option>
                {province?.map((p) => (
                  <option value={p.value} key={p.label} >
                    {p.value}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset>
              <legend>Country:</legend>
              <input
                name="userCountry"
                type="text"
                value="Nepal"
                className="inputField"
                onChange={handleChange}
                disabled
              />
            </fieldset>
          </fieldset>
          {!toggleButton ? (
            <input type="submit" value="Submit" className="submitBtn" />
          ) : (
            <input type="submit" value="Update" className="submitBtn" />
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <br />
      {userDatas.length !== 0 ? (
        <div className="tableMain">
          <UserTable
            userDatas={userDatas}
            setUserDatas={setUserDatas}
            setUserValue={setUserValue}
            setToggleButton={setToggleButton}
            setGetUpdateIndex={setGetUpdateIndex}
          />
          <button className="navigateBtn footerGap" onClick={handleNavigation}>
            Profile
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserRecord;
