import { getEventById, getFeaturedEvents } from "../../utils/api-utils";
import ErrorPage from "../404";

const SingeEvent = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="full-page">
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{event.title}</h1>
      <div>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <center>
          <div className="image">
            <img src={`/${event.image}`} />
          </div>
        </center>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
};

export default SingeEvent;
