import EventList from "../components/events/Event-list";
import { getFeaturedEvents } from "../utils/api-utils";
import Head from "next/head";
import NewsletterRegistration from "../components/inputs/registration";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Browse our events" />
      </Head>
      <NewsletterRegistration />
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
    revalidate: 1800,
  };
};

export default HomePage;
