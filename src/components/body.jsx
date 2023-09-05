import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://nc-news-api-88m2.onrender.com/api/articles")
      .then(({ data }) => {
        setArticles(data);
        setisLoading(false);
      });
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
