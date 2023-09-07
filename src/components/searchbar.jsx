import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { getTopics } from "../utilities/api";

const SearchBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics(setTopics);
  }, []);

  return (
    <>
      <section className="side-bar">
        <h2>View by topic:</h2>
        <ul className="topics-buttons">
          <li>
            <Link to="/articles">
              <button className="topic-button">All topics</button>
            </Link>
          </li>

          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link to={`/articles/${topic.slug}`}>
                  <button className="topic-button">{topic.slug}</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SearchBar;
