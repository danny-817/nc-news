import axios from "axios";
import { useState, useEffect } from "react";

export const getAllArticles = (setisLoading, setArticles) => {
  setisLoading(true);
  axios
    .get("https://nc-news-api-88m2.onrender.com/api/articles")
    .then(({ data }) => {
      setArticles(data);
      setisLoading(false);
    });
};

export const getSingleArticle = (
  article_id,
  setisLoading,
  setArticle,
  setArticleVotes
) => {
  setisLoading(true);
  axios
    .get(`https://nc-news-api-88m2.onrender.com/api/articles/${article_id}`)

    .then(({ data }) => {
      setArticle(data.article);
      setArticleVotes(data.article.votes);
      setisLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleComments = (article_id, setComments) => {
  axios
    .get(
      `https://nc-news-api-88m2.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      setComments(data.comments);
    });
};

export const getUsers = (setUsersArraym, setisLoading) => {
  setisLoading(true);
  axios
    .get("https://nc-news-api-88m2.onrender.com/api/users")
    .then(({ data }) => {
      setUsersArray(data.users);
      setisLoading(false);
    })
    .catch((err) => console.log(err));
};

export const getTopics = (setTopics) => {
  axios
    .get("https://nc-news-api-88m2.onrender.com/api/topics")
    .then(({ data }) => {
      setTopics(data);
    });
};

export const submitComment = (newComment, article_id, activeUser) => {
  console.log(newComment, article_id, activeUser, "submit comment");

  return axios
    .post(
      `https://nc-news-api-88m2.onrender.com/api/articles/${article_id}/comments`,
      { body: newComment, username: activeUser }
    )
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
