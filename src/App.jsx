import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AllTopics from "./pages/allTopics";
// import UserButton from "./components/userbutton";
// import Header from "./components/header";
// import SearchBar from "./components/searchbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="all-topics" element={<AllTopics />} />
      </Routes>
    </>
  );
}

export default App;
