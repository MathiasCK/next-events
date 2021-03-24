import EventList from "../components/events/Event-list";
import { getFeaturedEvents } from "../utils/api-utils";

const HomePage = (props) => {
  return (
    <div>
      {/*<h1>This is a homepage</h1> */}
      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
