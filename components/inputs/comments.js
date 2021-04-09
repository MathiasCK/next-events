import { useContext, useEffect, useState } from "react";
import NotificationContext from "../../store/notification.context";

import CommentList from "./comment-list";
import NewComment from "./new-comments";
import classes from "./styles/input.module.css";

const Comments = (props) => {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // Fetch comments
  useEffect(() => {
    if (showComments) {
      setIsFetching(true);
      fetch(`/api/comments/${eventId}`).then((response) =>
        response.json().then((data) => {
          setComments(data.comments);
          setIsFetching(false);
        })
      );
    }
  }, [showComments]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    notificationCtx.showNotification({
      title: "Sending comment",
      message: "Your comment is currently being stored",
      status: "pending",
    });
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log(data);
        notificationCtx.showNotification({
          title: "Success",
          message: "Your comment was saved",
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error",
          message: error.message || "Something went wrong",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.comments}>
      <button className={classes.btn} onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <CommentList items={comments} />}
      {showComments && !isFetching && (
        <NewComment onAddComment={addCommentHandler} />
      )}
      {showComments && isFetching && <p>Loading ...</p>}
    </section>
  );
};

export default Comments;
