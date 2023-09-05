import { useState } from "react";

const UserButton = () => {
  return (
    <>
      <div className="user-button">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Change User
        </button>
      </div>
    </>
  );
};

export default UserButton;
