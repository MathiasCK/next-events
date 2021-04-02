import classes from "./styles/input.module.css";

const CommentList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
