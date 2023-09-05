import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`https://nc-news-api-88m2.onrender.com/api/articles/${article_id}`)

      .then(({ data }) => {
        setArticle(data.article);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://nc-news-api-88m2.onrender.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        setComments(data.comments);
      });
  }, []);

  if (isLoading) return <h1>Fetching Article, Please Wait</h1>;
  return (
    <div className="full-article">
      <h2> {article.title}</h2>
      <section className="article-details">
        <h3 className="article-detail">Topic:{article.topic}</h3>

        <h3 className="article-detail">Author: {article.author}</h3>
        <h3 className="article-detail">Created at: {article.created_at}</h3>
        <h3 className="article-detail">Votes: {article.votes}</h3>
      </section>

      <img className="article_image" src={article.article_img_url} alt="" />
      <article>{article.body}</article>
      <div>
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => {
            return (
              <li className="comment-card" key={comment.comment_id}>
                <p className="comment">{comment.body}</p>
                <p>{comment.author}</p>
                <p>Votes: {comment.votes}</p>
                <p>{comment.created_at}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleArticle;
