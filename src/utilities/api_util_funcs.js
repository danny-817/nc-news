import axios from "axios";

export const increaseVote = (article_id) => {
  axios
    .patch(`https://nc-news-api-88m2.onrender.com/api/articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((response) => {})
    .catch((err) => console.log(err));
};

export const decreaseVote = (article_id) => {
  axios
    .patch(`https://nc-news-api-88m2.onrender.com/api/articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((response) => {})
    .catch((err) => console.log(err));
};
