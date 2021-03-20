import classes from "./styles/event-summary.module.css";

const EventSummary = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h2>{title}</h2>
    </section>
  );
};

export default EventSummary;
