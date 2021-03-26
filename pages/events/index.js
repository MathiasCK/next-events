import { getAllEvents } from "../../utils/api-utils";
import EventList from "../../components/events/Event-list";
import EventSearch from "../../components/events/Event-search";
import { useRouter } from "next/router";
import Head from "next/head";

const EventPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="This is the event page" />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default EventPage;
