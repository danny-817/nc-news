export const ArticleComments = ({ comments }) => {
  return (
    <div>
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
