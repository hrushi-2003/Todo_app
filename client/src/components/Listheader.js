import React from "react";

const Listheader = ({ listName }) => {
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button
          className="signout"
          onClick={() => {
            console.log("signout");
          }}
        >
          SIGNOUT
        </button>
      </div>
    </div>
  );
};

export default Listheader;
