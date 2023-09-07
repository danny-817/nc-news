import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Header = () => {
  const { activeUser } = useContext(UserContext);
  return (
    <header>
      {activeUser ? <h2>Logged in as {`${activeUser}`}</h2> : <h2></h2>}
      <h1 id="main-heading">NCWS</h1>
    </header>
  );
};

export default Header;
