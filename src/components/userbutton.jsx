import { useState } from "react";

const UserButton = () => {
  return (
    <>
      <div className="user-button">
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("user button click");
          }}
        >
          Change User
        </button>
      </div>
    </>
  );
};

export default UserButton;
