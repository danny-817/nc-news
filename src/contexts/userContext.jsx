import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({ username: null });
  console.log(children, "children");
  return (
    <UserContext.Provider value={{ activeuser: "dan" }}>
      {children}
    </UserContext.Provider>
  );
};
