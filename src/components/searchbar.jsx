import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-api-88m2.onrender.com/api/topics")
      .then(({ data }) => {
        setTopics(data);
      });
  }, []);

  return (
    <>
      <section className="side-bar">
        <h2>View by topic:</h2>
        <ul className="topics-buttons">
          <li>
            <button className="topic-button">All topics</button>
          </li>

          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <button className="topic-button">{topic.slug}</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SearchBar;

// const [query, setQuery] = useState("");
//   useEffect(() => {
//     axios
//       .get("https://nc-marketplace-sem-3.onrender.com/api/items", {
//         params: { category_name: query },
//       })
//       .then((response) => {
//         const { items } = response.data;
//         setItemsByCategory(items);
//       });
//   }, [query]);
