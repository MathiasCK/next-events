import { useRef, useState } from "react";
import Button from "../ui/button/Button";
import classes from "./styles/input.module.css";

const NewComment = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  const sendCommentHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });

    alert("Comment succesfull");

    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    commentInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={sendCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <input
            required
            placeholder="Your email"
            type="email"
            id="email"
            ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <input
            required
            placeholder="Your name"
            type="text"
            id="name"
            ref={nameInputRef}
          />
        </div>
      </div>
      <div className={classes.control}>
        <input
          placeholder="Your comment"
          required
          id="comment"
          ref={commentInputRef}
        />
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewComment;
