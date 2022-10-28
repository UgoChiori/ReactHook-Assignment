import React from "react";

const User = ({ user }) => {
  return (
    <div className="container">
     
      <p className="names">{` ${user.name.first} ${user.name.last}`}</p>
       <p className="names"> {` ${user.phone}`} </p>
       
    </div>
  );
};

export default User;
