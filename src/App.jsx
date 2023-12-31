import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AllArticles from "./pages/allArticlesPage";
import SingleArticlePage from "./pages/singleArticlePage";
import { UsersPage } from "./pages/usersPage";
import FilteredTopicPage from "./pages/filteredTopicPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/article/:article_id" element={<SingleArticlePage />} />
        <Route path="/articles/coding" element={<FilteredTopicPage />} />
        <Route path="/articles/football" element={<FilteredTopicPage />} />
        <Route path="/articles/cooking" element={<FilteredTopicPage />} />
      </Routes>
    </>
  );
}

export default App;
