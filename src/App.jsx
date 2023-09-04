import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import UserButton from "./components/userbutton";
import Header from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserButton />
      <Header />
      {/* <MainDisplay /> */}
    </>
  );
}

export default App;
