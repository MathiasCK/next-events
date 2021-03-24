import Button from "../ui/button/Button";

const ResultsTitle = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section>
      <h1>Events in {humanReadableDate}</h1>
      <center>
        <Button link="/events">Show all events</Button>
      </center>
    </section>
  );
};

export default ResultsTitle;
