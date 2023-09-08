import { useState, useEffect, useContext } from "react";
import { submitComment } from "../utilities/api";
import { UserContext } from "../contexts/userContext";

export const ArticleComments = ({ comments, setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const { activeUser } = useContext(UserContext);
  const [placeholderText, setPlaceHoldertext] = useState("add a comment...");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activeUser) {
      setPlaceHoldertext("please log in to make comments");
    } else if (newComment === "") {
      setPlaceHoldertext("Please enter a comment");
    } else if (newComment !== "" && activeUser) {
      setComments([{ body: newComment, author: activeUser }, ...comments]);
      submitComment(
        newComment,
        article_id,
        activeUser,
        setSubmitted,
        setPlaceHoldertext,
        setIsSubmitting
      );
      setNewComment("");
    }
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
            placeholder={placeholderText}
            value={newComment}
            onChange={handleChange}
          ></textarea>
          <button
            className={isSubmitting ? "inactive" : "true"}
            id="submit_button"
            onClick={handleSubmit}
          >
            {submitted ? "comment submitted!" : "submit"}
          </button>
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
              <p>Votes: {comment.votes || 0}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
