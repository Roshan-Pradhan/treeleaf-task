import React, { useEffect } from "react";
import "./userTable.css";

const UserTable = ({ userDatas, setUserDatas,setUserValue,setToggleButton,setGetUpdateIndex }) => {

  const handleDelete = (i) => {
    const existingData = JSON.parse(localStorage.getItem("user-record"));
    existingData.splice(i, 1);
    localStorage.setItem("user-record", JSON.stringify(existingData));
    setUserDatas(existingData);
    console.log(i);
  };

  const handleEdit =(i) =>{
    setGetUpdateIndex(i)
    const editableData = userDatas[i]
    setUserValue(editableData)
    setToggleButton(true)
  }

  const handleUpSort =() =>{
    const sortedArr = [...userDatas]
    sortedArr.sort((a,b)=>{
      return a.userName.localeCompare(b.userName)
    })
    setUserDatas(sortedArr)
  }
 
  const handleDownSort =() =>{
    const sortedArr = [...userDatas]
    sortedArr.sort((a,b)=>{
      return b.userName.localeCompare(a.userName)
    })
    setUserDatas(sortedArr)
  }
  const handleClearAll =() =>{
    localStorage.clear()
    location.reload()
  }
 
  return (
    <>
    
      <div className="tablewrapper">
        <table>
          <thead>
            <tr>
              <th>Name
                <span>
                  <button className="sorting" onClick={handleUpSort}>🔼</button>
                  <button className="sorting" onClick={handleDownSort}>🔽</button>

                </span>
              </th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>DOB</th>
              <th colSpan="4" rowSpan="4">Address</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userDatas?.map((record, index) => (
              <tr key={index}>
                <td data-label="Name">{record.userName} </td>
                <td data-label="Email">{record.userEmail} </td>
                <td data-label="PhoneNumber">{record.userNumber} </td>
                <td data-label="DOb">{record.userDate} </td>
                <td data-label="City">{record.userCity} </td>
                <td data-label="District">{record.userDistrict}</td>
                <td data-label="Province">{record.userProvince}</td>
                <td data-label="Country">{record.userCountry} </td>
                <td data-label="Edit" className="actions edit" onClick={()=> handleEdit(index)}>Edit</td>
                <td data-label="Delete" className="actions delete" onClick={() => handleDelete(index)}>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
          <button className="clear-all" onClick={handleClearAll} >
            Delete All
          </button>
        </table>
      </div>
    </>
  );
};

export default UserTable;
