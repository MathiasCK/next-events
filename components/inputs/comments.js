import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comments";
import classes from "./styles/input.module.css";

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    // send data to API
  };

  return (
    <section className={classes.comments}>
      <button className={classes.btn} onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
