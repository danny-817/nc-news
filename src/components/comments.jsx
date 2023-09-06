import { useState, useEffect, useContext } from "react";
import { submitComment } from "../utilities/api";
import { UserContext } from "../contexts/userContext";

export const ArticleComments = ({ comments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const { activeUser } = useContext(UserContext);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(newComment, article_id, activeUser);
    e.preventDefault();
    submitComment(newComment, article_id, activeUser);
  };

  return (
    <div>
      <form>
        <label htmlFor="new_comment_box">
          <textarea
            name="new_comment_box"
            id="new_comment_box"
            cols="60"
            rows="10"
            placeholder="add a comment..."
            value={newComment}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleSubmit}>submit</button>
        </label>
      </form>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return (
            <li className="comment-card" key={comment.comment_id}>
              <p className="comment">{comment.body}</p>
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
