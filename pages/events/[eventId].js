import Head from "next/head";
import Image from "next/image";
import { getEventById, getFeaturedEvents } from "../../utils/api-utils";
import Comments from "../../components/inputs/comments";

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
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <h1>{event.title}</h1>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <center>
        <div className="image">
          <Image src={`/${event.image}`} width={600} height={400} />
        </div>
      </center>
      <p>{event.description}</p>
      <Comments eventId={event.id} />
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
