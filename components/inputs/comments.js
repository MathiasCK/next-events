import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comments";
import classes from "./styles/input.module.css";

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);

  // Fetch comments
  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`).then((response) =>
        response.json().then((data) => {
          setComments(data.comments);
        })
      );
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className={classes.comments}>
      <button className={classes.btn} onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <CommentList items={comments} />}
      {showComments && <NewComment onAddComment={addCommentHandler} />}
    </section>
  );
};

export default Comments;
