import { Link } from "react-router-dom";
import { getUsers } from "../utilities/api";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const Users = () => {
  const [usersArray, setUsersArray] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { activeUser, setActiveUser } = useContext(UserContext);
  useEffect(() => {
    getUsers(setUsersArray, setisLoading);
  }, []);
  if (isLoading) return <h1>Fetching the users list, please wait!</h1>;
  return (
    <div>
      <ul>
        {usersArray.map((user) => {
          return (
            <Link to="/articles" key={user.username}>
              <button
                onClick={() => {
                  setActiveUser(user.username);
                }}
              >
                <li className="user-card">
                  <p>{user.username}</p>
                  <img src={user.avatar_url} alt="" />
                </li>
              </button>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
