import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-api-88m2.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data);
      });
  }, []);

  return (
    <ul>
      {articles.map((article) => {
        console.log(article);
        return (
          <li key={article.article_id}>
            <Link to={`/article/${article.article_id}`}>
              <button className="article-card">
                <div>
                  <p>{article.title}</p>
                  <p>Votes: {article.votes}</p>
                </div>

                <img
                  className="article-card-thumbnail"
                  src={article.article_img_url}
                ></img>
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Body;
