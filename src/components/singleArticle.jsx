import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { increaseVote, decreaseVote } from "../utilities/util_funcs";
import { getSingleArticle, getArticleComments } from "../utilities/api";
import { ArticleComments } from "./comments";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [articleVotes, setArticleVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id, setisLoading, setArticle, setArticleVotes);

    getArticleComments(article_id, setComments);
  }, []);

  if (isLoading) return <h1>Fetching Article, Please Wait</h1>;
  return (
    <div className="full-article">
      <h2> {article.title}</h2>
      <section className="article-details">
        <h3 className="article-detail">Topic:{article.topic}</h3>

        <h3 className="article-detail">Author: {article.author}</h3>
        <h3 className="article-detail">Created at: {article.created_at}</h3>
        <div>
          <h3 className="article-detail">Votes: {articleVotes}</h3>
          <button
            className={hasVoted ? "inactive" : "active"}
            onClick={() => {
              if (!hasVoted) {
                increaseVote(article_id);
                setArticleVotes(articleVotes + 1);
                setHasVoted(true);
              }
            }}
          >
            {hasVoted ? "Thanks!" : "Up Vote"}
          </button>
          <button
            className={!hasVoted ? "inactive" : "active"}
            onClick={() => {
              if (hasVoted) {
                decreaseVote(article_id);
                setArticleVotes(articleVotes - 1);
                setHasVoted(false);
              }
            }}
          >
            Remove Your Vote
          </button>
        </div>
      </section>

      <img className="article_image" src={article.article_img_url} alt="" />
      <article>{article.body}</article>
      <ArticleComments comments={comments} />
    </div>
  );
};

export default SingleArticle;
