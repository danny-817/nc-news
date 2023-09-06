import { useState } from "react";
import { Link } from "react-router-dom";

const UserButton = () => {
  return (
    <>
      <div className="user-button">
        <Link to="/">
          <button>Change User</button>
        </Link>
      </div>
    </>
  );
};

export default UserButton;
