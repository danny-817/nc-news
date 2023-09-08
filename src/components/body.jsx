import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../utilities/api";

const Body = ({ sortBy }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    getAllArticles(setisLoading, setArticles, sortBy);
  }, [sortBy]);
  if (isLoading) return <h1>Fetching Articles, Please Wait</h1>;
  articles.sort((a, b) => {
    a.comments - b.comments;
  });
  console.log(articles);
  return (
    <div>
      <h1>Showing all articles</h1>
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
    </div>
  );
};

export default Body;
