import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AllArticles from "./pages/allArticlesPage";

import SingleArticlePage from "./pages/singleArticlePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
