import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../utilities/api";

const Body = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getAllArticles(setisLoading, setArticles);
  }, []);
  if (isLoading) return <h1>Fetching Articles, Please Wait</h1>;
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Link to={`/article/${article.article_id}`}>
              <button className="article-card">
                <div>
                  <h2>{article.title}</h2>
                  <h3>Votes: {article.votes}</h3>
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
