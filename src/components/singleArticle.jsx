import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    axios
      .get(`https://nc-news-api-88m2.onrender.com/api/articles/${article_id}`, {
        params: { article_id: article_id },
      })
      .then(({ data }) => {
        setArticle(data.article);
      });
  }, []);

  return (
    <div className="full-article">
      <h2> {article.title}</h2>
      <section className="article-details">
        <h3 className="article-detail">Topic:{article.topic}</h3>
        <h3 className="article-detail">Article ID: {article.article_id}</h3>
        <h3 className="article-detail">Author: {article.author}</h3>
        <h3 className="article-detail">Created at: {article.created_at}</h3>
        <h3 className="article-detail">Votes: {article.votes}</h3>
      </section>

      <img className="article_image" src={article.article_img_url} alt="" />
      <article>{article.body}</article>
    </div>
  );
};

export default SingleArticle;
