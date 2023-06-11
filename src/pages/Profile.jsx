import React from "react";
import UserTable from "./UserTable";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = ({
  userDatas,
  setUserValue,
  setToggleButton,
  setGetUpdateIndex,
}) => {
  const navigate = useNavigate();
  const handleEdit = (index) => {
    const editableData = userDatas[index];
    setUserValue(editableData);
    setToggleButton(true);
    setGetUpdateIndex(index);
    navigate("/");
  };

  return (
    <div>
      <h1 className="profile-heading">Profiles</h1>
      {userDatas.length !== 0 ? (
        <div className="listWrapper">
          {userDatas.map((record, index) => (
            <div key={index} className="listItem">
              <h3>{record.userName}</h3>
              <p>Email: {record.userEmail}</p>
              <p>Phone Number: {record.userNumber}</p>
              <p>DOB: {record.userDate}</p>
              <p>City: {record.userCity}</p>
              <button onClick={() => handleEdit(index)} className="navigateBtn">
                Edit
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="profile-heading">NO record found ⬇</h4>
      )}

      <div className="profilebtn">
        <button onClick={() => navigate("/")} className="navigateBtn ">
          Add More Profiles
        </button>
      </div>
    </div>
  );
};

export default Profile;
