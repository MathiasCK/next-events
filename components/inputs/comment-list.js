import classes from "./styles/input.module.css";

const CommentList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items &&
        items.map((item) => (
          <li key={item._id}>
            <p>{item.userText}</p>
            <div>
              By <address>{item.userName}</address>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CommentList;
