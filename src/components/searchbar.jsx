import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { getTopics } from "../utilities/api";

const SearchBar = ({ filterBy, setFilterBy }) => {
  const [topics, setTopics] = useState([]);

  const changeHandler = (e) => {
    setFilterBy(e.target.value);
  };

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
        <section>
          <h2>Sort by:</h2>
          <form action="">
            <div>
              <input
                value="Date"
                id="radio1"
                type="radio"
                name="sortby"
                checked={filterBy === "Date"}
                onChange={changeHandler}
              />
              <label htmlFor="radio1">Date</label>
            </div>
            <br />
            <div>
              <input
                value="Comment Count"
                id="radio2"
                type="radio"
                name="sortby"
                checked={filterBy === "Comment Count"}
                onChange={changeHandler}
              />
              <label htmlFor="radio2">Comment Count</label>
            </div>
            <br />
            <div>
              <input
                value="Votes"
                id="radio3"
                type="radio"
                name="sortby"
                checked={filterBy === "Votes"}
                onChange={changeHandler}
              />
              <label htmlFor="radio3">Votes</label>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default SearchBar;
