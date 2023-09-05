import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AllArticles from "./pages/allArticlesPage";

import SingleArticlePage from "./pages/singleArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
