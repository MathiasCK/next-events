import EventList from "../components/events/Event-list";
import { getFeaturedEvents } from "../utils/api-utils";

const HomePage = (props) => {
  return (
    <>
      <EventList items={props.events} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
